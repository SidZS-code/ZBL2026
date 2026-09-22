# NNI Badminton 2026 — Men's Singles Tournament Dashboard

A public tournament site for 212 players: search your name, see your matches, opponents,
court and time, and your road to the final. Round 1 winners enter the **Gold Cup**;
Round 1 losers enter the **Silver Cup**. Results entered by organizers propagate through
the brackets automatically and appear live on every open screen.

Stack: React (Vite) on **Vercel** · data in **Supabase** (Postgres). Both free tiers are
more than enough for this event.

---

## 1. Set up Supabase (~15 min)

1. Create an account at https://supabase.com and create a new project
   (choose a region close to Mumbai, e.g. `ap-south-1`). Note the database password it asks you to set.
2. In the project, open **SQL Editor** → New query → paste the contents of
   `supabase/schema.sql` → **Run**. This creates the tables, the public-read /
   organizer-write security rules, and the triggers that auto-advance winners.
3. New query again → paste the contents of `supabase/seed.sql` → **Run**.
   This loads all 212 players and the full 360-match draw.
4. Create the organizer login: **Authentication → Users → Add user** →
   enter an email and password (e.g. `organizer@yourevent.in`). Tick "Auto confirm user".
   Share these credentials only with people who will enter results.
5. Collect your keys: **Project Settings → API** → copy the **Project URL** and the
   **anon public** key. (Never share the `service_role` key.)

## 2. Run locally (optional, ~5 min)

```bash
cp .env.example .env        # fill in the URL and anon key from step 1.5
npm install
npm run dev                 # opens http://localhost:5173
```

## 3. Deploy to Vercel (~15 min)

1. Push this folder to a GitHub repository.
2. At https://vercel.com → **Add New Project** → import the repo. Vercel detects Vite automatically.
3. Under **Environment Variables**, add:
   - `VITE_SUPABASE_URL` = your Project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon public key
4. Deploy. Your site is live at `https://<project>.vercel.app` — share this link with all participants.
   No login is needed to view anything.

## 4. Running the tournament

- **Organizers** open the site → **Organizers** tab → sign in with the account from step 1.4.
- Pick the bracket and round, then for each match: **tap the winner's name**. The winner
  moves into the next round automatically; for Round 1, the loser is placed into the
  Silver Cup automatically. Byes resolve themselves.
- Add score / court / time and press **Save details**. Participants see updates live.
- **Made a mistake?** Tap the correct winner (or **Clear result**) promptly — corrections
  propagate one round forward, so fix errors before the next round is played.

## 5. Regenerating the draw

The draw was generated deterministically from `Men_Singles_v1_0.xlsx` with
`scripts/generate_draw.py` (draw seed `20261`). If the player list changes **before**
the event:

```bash
python3 scripts/generate_draw.py path/to/new_list.xlsx supabase/seed.sql
```

then re-run `seed.sql` in the Supabase SQL Editor. ⚠️ Re-seeding wipes all entered
results — only do this before play begins.

## 6. Backups

Supabase free tier keeps daily backups, but for peace of mind during the event:
**Table Editor → matches → Export as CSV** gives you a full snapshot at any point.

---

### Answers to likely questions

- **Do participants need any account?** No. The site is fully public and read-only for visitors.
- **Can spectators break anything?** No. Row Level Security in Postgres rejects all writes
  unless the request is from a signed-in organizer — this is enforced by the database, not the UI.
- **How many organizers can enter results at once?** Several, safely — each match is an
  independent row, and advancement runs inside the database.
- **What about doubles / women's singles later?** The schema needs a small extension
  (a category column and per-category brackets); the same site can then host all events.
