"""
Generate the NNI Badminton Men's Singles draw as Supabase seed SQL.

Format: 212 players, all play Round 1 (106 matches, no byes).
R1 winners -> GOLD cup (128-draw, 22 byes spread evenly).
R1 losers  -> SILVER cup (identical structure).
Deterministic: DRAW_SEED fixes the shuffle so reruns give the same draw.
Usage: python3 scripts/generate_draw.py [players.xlsx] [out.sql]
"""
import openpyxl, random, sys

SRC = sys.argv[1] if len(sys.argv) > 1 else "/mnt/user-data/uploads/Men_Singles_v1_0.xlsx"
OUT = sys.argv[2] if len(sys.argv) > 2 else "supabase/seed.sql"
DRAW_SEED = 20261

wb = openpyxl.load_workbook(SRC)
ws = wb.worksheets[0]
players = []
for r in ws.iter_rows(min_row=2, values_only=True):
    if r[0] and str(r[0]).strip():
        players.append((str(r[0]).strip(), str(r[1]).strip() if r[1] is not None else ""))

n = len(players)
assert n % 2 == 0, f"Odd player count ({n}); add/remove one player or a bye is needed in R1."
random.seed(DRAW_SEED)
order = list(range(n))
random.shuffle(order)

def esc(s): return s.replace("'", "''")

lines = ["-- Generated seed: NNI Badminton 2026 - Men's Singles",
         f"-- {n} players, draw seed {DRAW_SEED}",
         "begin;",
         "delete from matches; delete from players;"]

for i, idx in enumerate(order, start=1):
    name, emp = players[idx]
    lines.append(f"insert into players (id, name, employee_id) values ({i}, '{esc(name)}', '{esc(emp)}');")

R1_COUNT = n // 2
CUP_R1_MATCHES = 64
BYES = CUP_R1_MATCHES * 2 - R1_COUNT  # 22

bye_pos = set()
k = 0
while len(bye_pos) < BYES:
    p = round(k * CUP_R1_MATCHES / BYES) % CUP_R1_MATCHES
    while p in bye_pos:
        p = (p + 1) % CUP_R1_MATCHES
    bye_pos.add(p); k += 1

ROUNDS = [(1, 64), (2, 32), (3, 16), (4, 8), (5, 4), (6, 2), (7, 1)]
mid = {}
next_id = 1000
rows = []

for p in range(R1_COUNT):
    rows.append(dict(id=p + 1, bracket="R1", round=1, position=p,
                     p1=2 * p + 1, p2=2 * p + 2, is_bye=False))
    mid[("R1", 1, p)] = p + 1

for bracket in ("GOLD", "SILVER"):
    for r, count in ROUNDS:
        for p in range(count):
            rows.append(dict(id=next_id, bracket=bracket, round=r, position=p,
                             p1=None, p2=None, is_bye=(r == 1 and p in bye_pos)))
            mid[(bracket, r, p)] = next_id
            next_id += 1

links = {}
for bracket in ("GOLD", "SILVER"):
    for r, count in ROUNDS[:-1]:
        for p in range(count):
            links[mid[(bracket, r, p)]] = (mid[(bracket, r + 1, p // 2)], p % 2 + 1, None, None)

feed_slots = []
for p in range(CUP_R1_MATCHES):
    feed_slots.append((p, 1))
    if p not in bye_pos:
        feed_slots.append((p, 2))
assert len(feed_slots) == R1_COUNT, (len(feed_slots), R1_COUNT)
for i in range(R1_COUNT):
    cup_pos, slot = feed_slots[i]
    links[i + 1] = (mid[("GOLD", 1, cup_pos)], slot, mid[("SILVER", 1, cup_pos)], slot)

for m in rows:
    nm, ns, lm, ls = links.get(m["id"], (None, None, None, None))
    v = lambda x: "null" if x is None else str(x)
    lines.append(
        "insert into matches (id, bracket, round, position, player1_id, player2_id, is_bye, "
        "next_match_id, next_slot, loser_next_match_id, loser_next_slot) values "
        f"({m['id']}, '{m['bracket']}', {m['round']}, {m['position']}, {v(m['p1'])}, {v(m['p2'])}, "
        f"{str(m['is_bye']).lower()}, {v(nm)}, {v(ns)}, {v(lm)}, {v(ls)});")

lines += ["select setval('players_id_seq', (select max(id) from players));",
          "select setval('matches_id_seq', (select max(id) from matches));",
          "commit;"]
open(OUT, "w").write("\n".join(lines) + "\n")
print(f"players: {n} | R1 matches: {R1_COUNT} | cup byes: {BYES} | total matches: {len(rows)}")
