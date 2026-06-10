-- Run this in the Supabase SQL editor to create the survey table used by the app.

create table if not exists surveys (
  id bigserial primary key,
  name text not null,
  email text not null,
  survey_title text not null,
  feedback text,
  rating integer not null default 5,
  is_finalized boolean not null default false,
  pending_expires_at timestamptz,
  created_at timestamptz not null default now(),
  last_updated_at timestamptz not null default now()
);

-- Allow public clients to insert/update/delete if you want quick testing.
-- In production, use row-level security and authenticated users.

-- Example policy for public access (ONLY for prototyping):
-- alter table surveys enable row level security;
-- create policy "public insert" on surveys for insert using (true);
-- create policy "public update" on surveys for update using (true);
-- create policy "public delete" on surveys for delete using (true);
-- create policy "public select" on surveys for select using (true);
