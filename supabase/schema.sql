-- ============================================================
-- NNI Badminton 2026 · Tournament schema (run FIRST, then seed.sql)
-- ============================================================

create table if not exists players (
  id          serial primary key,
  name        text not null,
  employee_id text default ''
);

create table if not exists matches (
  id                  serial primary key,
  bracket             text not null check (bracket in ('R1', 'GOLD', 'SILVER')),
  round               int  not null,
  position            int  not null,
  player1_id          int references players(id),
  player2_id          int references players(id),
  winner_id           int references players(id),
  score               text,
  court               text,
  scheduled_at        timestamptz,
  status              text not null default 'scheduled'
                      check (status in ('scheduled', 'live', 'done')),
  is_bye              boolean not null default false,
  next_match_id       int,
  next_slot           int check (next_slot in (1, 2)),
  loser_next_match_id int,
  loser_next_slot     int check (loser_next_slot in (1, 2)),
  unique (bracket, round, position)
);

create index if not exists idx_matches_bracket on matches (bracket, round, position);
create index if not exists idx_matches_players on matches (player1_id, player2_id);

-- ------------------------------------------------------------
-- Row Level Security: the internet can read, only signed-in
-- organizers can write. This is what makes a public URL safe.
-- ------------------------------------------------------------
alter table players enable row level security;
alter table matches enable row level security;

create policy "public read players"  on players for select using (true);
create policy "public read matches"  on matches for select using (true);
create policy "organizer write players" on players for all
  to authenticated using (true) with check (true);
create policy "organizer write matches" on matches for all
  to authenticated using (true) with check (true);

-- ------------------------------------------------------------
-- Bye auto-win: when a bye match receives its player, that
-- player wins immediately (BEFORE trigger on the row itself).
-- ------------------------------------------------------------
create or replace function bye_auto_win() returns trigger
language plpgsql security definer as $$
begin
  if new.is_bye and new.player1_id is not null and new.winner_id is null then
    new.winner_id := new.player1_id;
    new.status    := 'done';
    new.score     := 'Bye';
  end if;
  return new;
end $$;

drop trigger if exists trg_bye_auto_win on matches;
create trigger trg_bye_auto_win before insert or update on matches
for each row execute function bye_auto_win();

-- ------------------------------------------------------------
-- Propagation: when a winner is set (or corrected), push the
-- winner into the next match slot; for R1, push the loser into
-- the Silver bracket. Runs server-side so results advance even
-- if the admin's browser closes mid-update.
-- ------------------------------------------------------------
create or replace function propagate_result() returns trigger
language plpgsql security definer as $$
declare
  loser int;
begin
  if new.winner_id is distinct from old.winner_id and new.winner_id is not null then
    if new.next_match_id is not null then
      update matches set
        player1_id = case when new.next_slot = 1 then new.winner_id else player1_id end,
        player2_id = case when new.next_slot = 2 then new.winner_id else player2_id end
      where id = new.next_match_id;
    end if;
    if new.loser_next_match_id is not null then
      loser := case when new.winner_id = new.player1_id then new.player2_id else new.player1_id end;
      update matches set
        player1_id = case when new.loser_next_slot = 1 then loser else player1_id end,
        player2_id = case when new.loser_next_slot = 2 then loser else player2_id end
      where id = new.loser_next_match_id;
    end if;
  end if;
  return new;
end $$;

drop trigger if exists trg_propagate on matches;
create trigger trg_propagate after update on matches
for each row execute function propagate_result();

-- ------------------------------------------------------------
-- Realtime: lets every open dashboard update the moment a
-- result is entered, without refreshing.
-- ------------------------------------------------------------
alter publication supabase_realtime add table matches;

-- ------------------------------------------------------------
-- updated_at: powers the "latest results" feed.
-- ------------------------------------------------------------
alter table matches add column if not exists updated_at timestamptz not null default now();

create or replace function touch_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists trg_touch on matches;
create trigger trg_touch before update on matches
for each row execute function touch_updated_at();
