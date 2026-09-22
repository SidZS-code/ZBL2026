import React, { useState, useEffect, useMemo, useCallback } from "react";
import { supabase } from "./supabase.js";

// ---------- labels ----------
const CUP_ROUNDS = 7; // 64,32,16,8,QF,SF,F
function roundLabel(bracket, round) {
  if (bracket === "R1") return "Round 1";
  const left = CUP_ROUNDS - round; // 0 = final
  if (left === 0) return "Final";
  if (left === 1) return "Semifinal";
  if (left === 2) return "Quarterfinal";
  return `${bracket === "GOLD" ? "Gold" : "Silver"} round ${round}`;
}
function bracketLabel(b) {
  return b === "R1" ? "Round 1" : b === "GOLD" ? "Gold Cup" : "Silver Cup";
}
function fmtTime(ts) {
  if (!ts) return null;
  const d = new Date(ts);
  return d.toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
}

// ---------- court-line hero graphic ----------
function CourtLines() {
  return (
    <svg className="courtlines" viewBox="0 0 800 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="#ffffff" strokeWidth="2" fill="none">
        <rect x="60" y="10" width="680" height="140" />
        <line x1="400" y1="10" x2="400" y2="150" strokeWidth="3" strokeDasharray="6 6" />
        <line x1="60" y1="30" x2="740" y2="30" />
        <line x1="60" y1="130" x2="740" y2="130" />
        <line x1="330" y1="10" x2="330" y2="150" />
        <line x1="470" y1="10" x2="470" y2="150" />
        <line x1="60" y1="80" x2="330" y2="80" />
        <line x1="470" y1="80" x2="740" y2="80" />
      </g>
    </svg>
  );
}

// ---------- match card (public views) ----------
function MatchCard({ m, playersById, highlightId }) {
  const p1 = playersById[m.player1_id];
  const p2 = playersById[m.player2_id];
  const nm = (p, slot) => {
    if (p) return p.name;
    if (m.is_bye && slot === 2) return "Bye";
    return "To be decided";
  };
  const rowCls = (pid) => {
    if (!m.winner_id) return pid === highlightId ? "row won" : "row";
    return m.winner_id === pid ? "row won" : "row lost";
  };
  return (
    <div className="match">
      <div className="meta">
        <span>{bracketLabel(m.bracket)} · {roundLabel(m.bracket, m.round)} · Match {m.position + 1}</span>
        {m.status === "live" && <span className="live">Live now</span>}
        {m.status === "done" && !m.is_bye && <span>Final</span>}
      </div>
      <div className="vs">
        <div className={rowCls(m.player1_id)}>
          <span className={"nm" + (p1 ? "" : " pend")}>{nm(p1, 1)}</span>
          {m.winner_id === m.player1_id && <span className="sc">{m.score || "Won"}</span>}
        </div>
        <div className={rowCls(m.player2_id)}>
          <span className={"nm" + (p2 ? "" : " pend")}>{nm(p2, 2)}</span>
          {m.winner_id === m.player2_id && <span className="sc">{m.score || "Won"}</span>}
        </div>
      </div>
      {(m.court || m.scheduled_at) && (
        <div className="chiprow">
          {m.court && <span className="chip">Court {m.court}</span>}
          {m.scheduled_at && <span className="chip">{fmtTime(m.scheduled_at)}</span>}
        </div>
      )}
    </div>
  );
}

// ---------- Find me ----------
function FindMe({ players, matches, playersById, matchesById }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);

  const hits = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return players
      .filter((p) => p.name.toLowerCase().includes(t) || (p.employee_id || "").toLowerCase().includes(t))
      .slice(0, 12);
  }, [q, players]);

  const my = useMemo(() => {
    if (!sel) return null;
    const mine = matches
      .filter((m) => m.player1_id === sel.id || m.player2_id === sel.id)
      .sort((a, b) => (a.bracket === "R1" ? 0 : 1) - (b.bracket === "R1" ? 0 : 1) || a.round - b.round);
    const r1 = mine.find((m) => m.bracket === "R1");
    let cup = "tbd";
    if (r1?.winner_id) cup = r1.winner_id === sel.id ? "gold" : "silver";
    // road to final: from the player's active (unfinished) match, walk the winner chain
    const active = mine.find((m) => !m.winner_id) || null;
    const road = [];
    let cur = active;
    // If eliminated from their cup, no road
    const eliminated = mine.some((m) => m.bracket !== "R1" && m.winner_id && m.winner_id !== sel.id);
    while (cur && !eliminated) {
      const oppId = cur.player1_id === sel.id ? cur.player2_id : cur.player1_id === null && cur.player2_id === sel.id ? cur.player1_id : cur.player1_id === sel.id ? cur.player2_id : cur.player1_id;
      const opp =
        cur.player1_id && cur.player2_id
          ? playersById[cur.player1_id === sel.id ? cur.player2_id : cur.player1_id]?.name
          : cur.is_bye && (cur.player1_id === sel.id || cur.player2_id === sel.id)
          ? "Bye"
          : null;
      road.push({ m: cur, opp });
      cur = cur.next_match_id ? matchesById[cur.next_match_id] : null;
      // after the player's own active match, the chain continues only if this is their cup path
    }
    return { mine, cup, road, eliminated };
  }, [sel, matches, playersById, matchesById]);

  return (
    <div>
      <input
        className="search"
        placeholder="Type your name or employee ID"
        value={q}
        onChange={(e) => { setQ(e.target.value); setSel(null); }}
        autoFocus
      />
      {!sel && q.trim().length < 2 && <div className="hint">Start typing at least 2 letters to find yourself.</div>}
      {!sel && hits.length > 0 && (
        <div className="plist">
          {hits.map((p) => (
            <button key={p.id} onClick={() => setSel(p)}>
              {p.name} <span className="emp">· {p.employee_id}</span>
            </button>
          ))}
        </div>
      )}
      {!sel && q.trim().length >= 2 && hits.length === 0 && (
        <div className="empty">No player found for “{q}”. Check the spelling, or search by employee ID.</div>
      )}

      {sel && my && (
        <div className="mycard">
          <div className="myname">
            {sel.name}
            <span className={"cupchip " + my.cup}>
              {my.cup === "gold" ? "Gold Cup" : my.cup === "silver" ? "Silver Cup" : "Cup decided after Round 1"}
            </span>
          </div>

          {my.mine.length === 0 && <div className="empty">No matches assigned yet. Check back once the schedule is out.</div>}
          {my.mine.map((m) => (
            <MatchCard key={m.id} m={m} playersById={playersById} highlightId={sel.id} />
          ))}

          {my.eliminated ? (
            <div className="road"><h3>Run complete</h3><div className="hint">Thanks for playing — results stay available in the Draw tab.</div></div>
          ) : my.road.length > 0 && (
            <div className="road">
              <h3>Road to the final</h3>
              <ol>
                {my.road.map(({ m, opp }, i) => (
                  <li key={m.id} className={i === 0 ? "next" : ""}>
                    <span className="rl">{bracketLabel(m.bracket)} · {roundLabel(m.bracket, m.round)}</span>{" "}
                    <span className="op">{opp ? `vs ${opp}` : "opponent to be decided"}</span>
                    {m.court && <span className="op"> · Court {m.court}</span>}
                    {m.scheduled_at && <span className="op"> · {fmtTime(m.scheduled_at)}</span>}
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div style={{ marginTop: 14 }}>
            <button className="abtn quiet" onClick={() => { setSel(null); setQ(""); }}>Search another player</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Draw ----------
function Draw({ matches, playersById }) {
  const [br, setBr] = useState("R1");
  const rounds = useMemo(() => {
    const rs = {};
    matches.filter((m) => m.bracket === br).forEach((m) => {
      (rs[m.round] = rs[m.round] || []).push(m);
    });
    Object.values(rs).forEach((arr) => arr.sort((a, b) => a.position - b.position));
    return Object.entries(rs).sort((a, b) => a[0] - b[0]);
  }, [matches, br]);

  return (
    <div>
      <div className="brtabs">
        <button className={br === "R1" ? "on" : ""} onClick={() => setBr("R1")}>Round 1</button>
        <button className={br === "GOLD" ? "on g" : ""} onClick={() => setBr("GOLD")}>Gold Cup</button>
        <button className={br === "SILVER" ? "on s" : ""} onClick={() => setBr("SILVER")}>Silver Cup</button>
      </div>
      <div className="hint" style={{ marginBottom: 10 }}>
        {br === "R1"
          ? "Everyone plays Round 1. Win and you enter the Gold Cup; lose and you enter the Silver Cup."
          : "Swipe sideways to follow the bracket through to the final."}
      </div>
      <div className="bracket">
        <div className="bracket-cols">
          {rounds.map(([r, ms]) => (
            <div className="brcol" key={r}>
              <h4>{roundLabel(br, Number(r))} · {ms.length} match{ms.length === 1 ? "" : "es"}</h4>
              {ms.map((m) => <MatchCard key={m.id} m={m} playersById={playersById} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Results ----------
function Results({ matches, playersById }) {
  const done = useMemo(
    () =>
      matches
        .filter((m) => m.status === "done" && !m.is_bye)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 40),
    [matches]
  );
  return (
    <div className="results">
      {done.length === 0 && <div className="empty">No results yet. This feed fills up as matches finish.</div>}
      {done.map((m) => <MatchCard key={m.id} m={m} playersById={playersById} />)}
    </div>
  );
}

// ---------- Admin ----------
function Admin({ matches, playersById, session, reload }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [br, setBr] = useState("R1");
  const [round, setRound] = useState("1");
  const [hideDone, setHideDone] = useState(true);
  const [edits, setEdits] = useState({}); // matchId -> {score, court, scheduled_at}
  const [savedId, setSavedId] = useState(null);

  async function signIn() {
    setErr("");
    const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
    if (error) setErr(error.message);
  }
  async function signOut() { await supabase.auth.signOut(); }

  const shown = useMemo(
    () =>
      matches
        .filter((m) => m.bracket === br && String(m.round) === round && !m.is_bye && (!hideDone || m.status !== "done"))
        .sort((a, b) => a.position - b.position),
    [matches, br, round, hideDone]
  );
  const roundsOf = (b) => (b === "R1" ? [1] : [1, 2, 3, 4, 5, 6, 7]);

  async function saveMatch(m, winnerId) {
    const e = edits[m.id] || {};
    const patch = {
      score: e.score !== undefined ? e.score : m.score,
      court: e.court !== undefined ? e.court : m.court,
      scheduled_at: e.scheduled_at !== undefined ? (e.scheduled_at || null) : m.scheduled_at,
    };
    if (winnerId !== undefined) {
      patch.winner_id = winnerId;
      patch.status = winnerId ? "done" : "scheduled";
    }
    const { error } = await supabase.from("matches").update(patch).eq("id", m.id);
    if (error) { setErr(error.message); return; }
    setSavedId(m.id);
    setTimeout(() => setSavedId(null), 1500);
    reload();
  }

  if (!session) {
    return (
      <div className="mycard" style={{ maxWidth: 420 }}>
        <h3 style={{ marginTop: 0 }}>Organizer sign in</h3>
        <div className="field" style={{ marginBottom: 10 }}>Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="username" />
        </div>
        <div className="field" style={{ marginBottom: 14 }}>Password
          <input value={pw} onChange={(e) => setPw(e.target.value)} type="password" autoComplete="current-password" />
        </div>
        <button className="abtn" onClick={signIn}>Sign in</button>
        {err && <div className="err">{err}</div>}
        <div className="hint" style={{ marginTop: 10 }}>Organizer accounts are created in the Supabase dashboard (Authentication → Users).</div>
      </div>
    );
  }

  return (
    <div>
      <div className="adminbar">
        <select value={br} onChange={(e) => { setBr(e.target.value); setRound("1"); }}>
          <option value="R1">Round 1</option>
          <option value="GOLD">Gold Cup</option>
          <option value="SILVER">Silver Cup</option>
        </select>
        <select value={round} onChange={(e) => setRound(e.target.value)}>
          {roundsOf(br).map((r) => <option key={r} value={String(r)}>{roundLabel(br, r)}</option>)}
        </select>
        <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5 }}>
          <input type="checkbox" checked={hideDone} onChange={(e) => setHideDone(e.target.checked)} /> Hide finished
        </label>
        <button className="abtn quiet" onClick={signOut} style={{ marginLeft: "auto" }}>Sign out</button>
      </div>
      {err && <div className="err">{err}</div>}
      {shown.length === 0 && <div className="empty">No matches here{hideDone ? " (finished matches hidden)" : ""}.</div>}
      {shown.map((m) => {
        const p1 = playersById[m.player1_id];
        const p2 = playersById[m.player2_id];
        const e = edits[m.id] || {};
        const setE = (patch) => setEdits((prev) => ({ ...prev, [m.id]: { ...(prev[m.id] || {}), ...patch } }));
        const ready = m.player1_id && m.player2_id;
        return (
          <div className="match" key={m.id}>
            <div className="meta">
              <span>{roundLabel(m.bracket, m.round)} · Match {m.position + 1}</span>
              {savedId === m.id && <span className="savedflash">Saved ✓</span>}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button className={"winbtn" + (m.winner_id && m.winner_id === m.player1_id ? " won" : "")}
                disabled={!ready} onClick={() => saveMatch(m, m.player1_id)}>
                {p1 ? p1.name : "To be decided"}
              </button>
              <button className={"winbtn" + (m.winner_id && m.winner_id === m.player2_id ? " won" : "")}
                disabled={!ready} onClick={() => saveMatch(m, m.player2_id)}>
                {p2 ? p2.name : "To be decided"}
              </button>
            </div>
            <div className="hint" style={{ margin: "6px 2px" }}>Tap the winner's name to record the result. Tap again after correcting a mistake.</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 8, alignItems: "end" }}>
              <div className="field">Score
                <input placeholder="21-15, 21-18" value={e.score !== undefined ? e.score : m.score || ""} onChange={(ev) => setE({ score: ev.target.value })} />
              </div>
              <div className="field">Court
                <input placeholder="3" value={e.court !== undefined ? e.court : m.court || ""} onChange={(ev) => setE({ court: ev.target.value })} />
              </div>
              <div className="field">Time
                <input type="datetime-local"
                  value={e.scheduled_at !== undefined ? e.scheduled_at : m.scheduled_at ? m.scheduled_at.slice(0, 16) : ""}
                  onChange={(ev) => setE({ scheduled_at: ev.target.value })} />
              </div>
              <button className="abtn quiet" onClick={() => saveMatch(m)}>Save details</button>
            </div>
            {m.winner_id && (
              <div style={{ marginTop: 8 }}>
                <button className="abtn quiet" onClick={() => saveMatch(m, null)}>Clear result</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---------- App shell ----------
export default function App() {
  const [tab, setTab] = useState(window.location.hash === "#admin" ? "admin" : "find");
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [session, setSession] = useState(null);
  const [loadErr, setLoadErr] = useState("");

  const reload = useCallback(async () => {
    if (!supabase) return;
    const [p, m] = await Promise.all([
      supabase.from("players").select("*").order("name"),
      supabase.from("matches").select("*"),
    ]);
    if (p.error || m.error) { setLoadErr((p.error || m.error).message); return; }
    setPlayers(p.data);
    setMatches(m.data);
  }, []);

  useEffect(() => {
    if (!supabase) return;
    reload();
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: authSub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    const ch = supabase
      .channel("matches-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "matches" }, () => reload())
      .subscribe();
    return () => { authSub.subscription.unsubscribe(); supabase.removeChannel(ch); };
  }, [reload]);

  const playersById = useMemo(() => Object.fromEntries(players.map((p) => [p.id, p])), [players]);
  const matchesById = useMemo(() => Object.fromEntries(matches.map((m) => [m.id, m])), [matches]);

  if (!supabase) {
    return (
      <div className="wrap">
        <div className="err">Supabase is not configured. Copy .env.example to .env and fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then restart.</div>
      </div>
    );
  }

  return (
    <>
      <header className="hero">
        <CourtLines />
        <div className="hero-inner">
          <h1>NNI Badminton 2026</h1>
          <div className="sub">Men's singles · 212 players · Gold Cup and Silver Cup knockouts</div>
        </div>
      </header>
      <nav className="nav">
        <div className="nav-inner">
          <button className={tab === "find" ? "on" : ""} onClick={() => setTab("find")}>Find your matches</button>
          <button className={tab === "draw" ? "on" : ""} onClick={() => setTab("draw")}>Draw</button>
          <button className={tab === "results" ? "on" : ""} onClick={() => setTab("results")}>Results</button>
          <button className={tab === "admin" ? "on" : ""} onClick={() => setTab("admin")}>Organizers</button>
        </div>
      </nav>
      <main className="wrap">
        {loadErr && <div className="err">Could not load tournament data: {loadErr}</div>}
        {tab === "find" && <FindMe players={players} matches={matches} playersById={playersById} matchesById={matchesById} />}
        {tab === "draw" && <Draw matches={matches} playersById={playersById} />}
        {tab === "results" && <Results matches={matches} playersById={playersById} />}
        {tab === "admin" && <Admin matches={matches} playersById={playersById} session={session} reload={reload} />}
        <div className="footer">Every player's first match is in Round 1. Winners move to the Gold Cup, and everyone else competes for the Silver Cup — two finals, two champions.</div>
      </main>
    </>
  );
}
