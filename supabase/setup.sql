-- =====================================================================
-- Portfolio Matteo Le Pera · database dei progetti su Supabase
-- Da eseguire una sola volta nel SQL Editor del progetto.
-- =====================================================================


-- ---------------------------------------------------------------------
-- 1. Tabelle
-- ---------------------------------------------------------------------

-- Progetti: una riga per progetto, con scheda tecnica e debriefing
create table public.projects (
  id                 text primary key,             -- parte finale dell'indirizzo: /progetti/focusone
  position           text not null,                -- P1, P2, P3...
  sort_order         smallint not null unique,     -- ordine di visualizzazione
  featured           boolean not null default false,
  name               text not null,
  subtitle           text,
  badge              text,
  description        text not null,
  role               text not null,
  stack              text[] not null default '{}',
  image              text,
  repo_url           text,
  link_label         text,
  link_url           text,
  season             text,
  duration           text,
  team               text,
  debrief_goal       text,
  debrief_approach   text,
  debrief_challenge  text,
  debrief_learned    text,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

-- Giri: l'evoluzione di un progetto, in ordine
create table public.project_laps (
  id          bigint generated always as identity primary key,
  project_id  text not null references public.projects (id) on delete cascade,
  lap_number  smallint not null,
  text        text not null,                       -- testo completo, per la pagina del progetto
  short       text not null,                       -- testo breve, per la card in home
  unique (project_id, lap_number)
);

-- Immagini: le schermate della galleria, in ordine
create table public.project_images (
  id          bigint generated always as identity primary key,
  project_id  text not null references public.projects (id) on delete cascade,
  sort_order  smallint not null,
  src         text not null,
  label       text not null,                       -- nome breve: Cam 1 · Home
  alt         text not null,                       -- descrizione per gli screen reader
  unique (project_id, sort_order)
);

create index project_laps_project_id_idx on public.project_laps (project_id);
create index project_images_project_id_idx on public.project_images (project_id);


-- ---------------------------------------------------------------------
-- 2. Data di ultima modifica aggiornata in automatico
-- ---------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger projects_set_updated_at
before update on public.projects
for each row execute function public.set_updated_at();


-- ---------------------------------------------------------------------
-- 3. Sicurezza: il sito può solo leggere
-- ---------------------------------------------------------------------

-- Row Level Security attiva su tutte e tre le tabelle
alter table public.projects enable row level security;
alter table public.project_laps enable row level security;
alter table public.project_images enable row level security;

-- Regole: chiunque può leggere, nessuno può scrivere dal sito
create policy "Progetti leggibili da tutti"
on public.projects for select
to anon, authenticated
using (true);

create policy "Giri leggibili da tutti"
on public.project_laps for select
to anon, authenticated
using (true);

create policy "Immagini leggibili da tutti"
on public.project_images for select
to anon, authenticated
using (true);

-- Permessi per la Data API: solo lettura
grant select on public.projects, public.project_laps, public.project_images to anon, authenticated;


-- ---------------------------------------------------------------------
-- 4. Dati iniziali (presi da src/content/projects.js)
-- ---------------------------------------------------------------------

insert into public.projects (
  id, position, sort_order, featured, name, subtitle, badge, description, role, stack,
  image, repo_url, link_label, link_url, season, duration, team,
  debrief_goal, debrief_approach, debrief_challenge, debrief_learned
) values
(
  'ferrari-archive', 'P1', 1, true, 'F******', 'Archivio Ferrari', 'In sviluppo · nome top secret',
  'L''archivio tecnico di tutte le Ferrari mai prodotte, dalle stradali alla F1 fino ai prototipi. Niente prezzi, niente vendita: solo storia e dati, organizzati come si deve.',
  'Da solo', array['Laravel', 'React', 'Tailwind', 'MySQL'],
  null, null, 'Segui la rivelazione su LinkedIn', 'https://www.linkedin.com/in/matteo-le-pera/',
  '[Anno]', '[Durata]', 'Da solo',
  '[Il problema da risolvere]', '[Cosa ho fatto io]', '[La sfida più difficile e come l''ho risolta]', '[Cosa ho imparato]'
),
(
  'focusone', 'P2', 2, false, 'FocusOne', null, null,
  'App a tema Formula 1: team, piloti e power unit della stagione, con backoffice CRUD protetto e API REST.',
  'Full stack', array['Laravel', 'React'],
  null, null, null, null,
  '[Anno]', '[Durata]', '[Da solo o N persone]',
  '[Il problema da risolvere]', '[Cosa ho fatto io]', '[La sfida più difficile e come l''ho risolta]', '[Cosa ho imparato]'
),
(
  'aeterna-skin', 'P3', 3, false, 'Aeterna Skin', null, null,
  'E-commerce di skincare in team: mockup su Figma, carrello e checkout in React, invio email con Nodemailer.',
  'In team', array['React', 'Node.js'],
  null, null, null, null,
  '[Anno]', '[Durata]', '[N persone]',
  '[Il problema da risolvere]', '[Cosa ho fatto io]', '[La sfida più difficile e come l''ho risolta]', '[Cosa ho imparato]'
),
(
  'trip-and-chill', 'P4', 4, false, 'Trip&Chill', null, null,
  'Rubrica digitale per accompagnatori di viaggio: filtro per mese, form dei viaggi e menu chiamate di emergenza.',
  'Frontend in team', array['React'],
  null, null, null, null,
  '[Anno]', '[Durata]', '[N persone]',
  '[Il problema da risolvere]', '[Cosa ho fatto io]', '[La sfida più difficile e come l''ho risolta]', '[Cosa ho imparato]'
);

insert into public.project_laps (project_id, lap_number, text, short) values
('ferrari-archive', 1, 'L''idea parte con Node.js e MySQL.', 'Idea in Node.js e MySQL'),
('ferrari-archive', 2, 'Rifatto da zero: API REST in Laravel e frontend React in due repository.', 'API Laravel e React separati'),
('ferrari-archive', 3, 'Area admin con tre livelli di staff, autenticazione con Sanctum, sito multilingua.', 'Admin, Sanctum e multilingua');

insert into public.project_images (project_id, sort_order, src, label, alt) values
('focusone', 1, '/images/focusone/home-desktop.webp', 'Home', 'Home pubblica di FocusOne'),
('focusone', 2, '/images/focusone/login-backoffice.webp', 'Login', 'Login del backoffice di FocusOne'),
('focusone', 3, '/images/focusone/dashboard-backoffice.webp', 'Dashboard', 'Dashboard del backoffice di FocusOne'),
('aeterna-skin', 1, '/images/aeternaskin/home-desktop.webp', 'Home', 'Home di Aeterna Skin'),
('aeterna-skin', 2, '/images/aeternaskin/popup.webp', 'Popup', 'Popup di Aeterna Skin'),
('aeterna-skin', 3, '/images/aeternaskin/cartpreview.webp', 'Carrello', 'Anteprima del carrello di Aeterna Skin'),
('aeterna-skin', 4, '/images/aeternaskin/checkout.webp', 'Checkout', 'Checkout di Aeterna Skin'),
('aeterna-skin', 5, '/images/aeternaskin/ordine-confermato.webp', 'Ordine', 'Conferma dell''ordine su Aeterna Skin'),
('trip-and-chill', 1, '/images/tripandchill/desktop_screen.webp', 'Desktop', 'Trip&Chill su desktop'),
('trip-and-chill', 2, '/images/tripandchill/tablet_screen.webp', 'Tablet', 'Trip&Chill su tablet'),
('trip-and-chill', 3, '/images/tripandchill/mobile_screen.webp', 'Telefono', 'Trip&Chill su telefono');

-- ---------------------------------------------------------------------
-- 5. Funzione dell'RLS automatica: nessuno la può chiamare dall'API
-- ---------------------------------------------------------------------

revoke execute on function public.nome_funzione() from public, anon, authenticated;

-- ---------------------------------------------------------------------
-- 6. Modifiche successive
-- ---------------------------------------------------------------------

-- Più repository per progetto, ognuno con la sua etichetta
alter table public.projects add column repos jsonb not null default '[]';

-- Il vecchio campo con un solo repository non serve più
alter table public.projects drop column repo_url;