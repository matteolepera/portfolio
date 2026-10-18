import { supabase } from "../lib/supabase";

const SELECT = "*, project_laps(*), project_images(*)";

// Da una riga del database alla forma usata dai componenti
function toProject(row) {
  return {
    id: row.id,
    position: row.position,
    featured: row.featured,
    name: row.name,
    subtitle: row.subtitle,
    badge: row.badge,
    description: row.description,
    role: row.role,
    stack: row.stack ?? [],
    image: row.image,
    repos: row.repos ?? [],
    linkLabel: row.link_label,
    linkUrl: row.link_url,
    season: row.season,
    duration: row.duration,
    team: row.team,
    debrief: {
      goal: row.debrief_goal,
      approach: row.debrief_approach,
      challenge: row.debrief_challenge,
      learned: row.debrief_learned,
    },
    laps:
      row.project_laps.length > 0
        ? row.project_laps.map((lap) => ({
            id: lap.lap_number,
            text: lap.text,
            short: lap.short,
          }))
        : null,
    gallery: row.project_images.map((image) => ({
      src: image.src,
      label: image.label,
      alt: image.alt,
      device: image.device,
    })),
  };
}

function getClient() {
  if (!supabase) throw new Error("Supabase non configurato");
  return supabase;
}

// Tutti i progetti, con giri e immagini, nell'ordine di visualizzazione
export async function fetchProjects() {
  const { data, error } = await getClient()
    .from("projects")
    .select(SELECT)
    .order("sort_order")
    .order("lap_number", { referencedTable: "project_laps" })
    .order("sort_order", { referencedTable: "project_images" });

  if (error) throw error;
  return data.map(toProject);
}

// Un solo progetto dal suo id; null se non esiste
export async function fetchProject(id) {
  const { data, error } = await getClient()
    .from("projects")
    .select(SELECT)
    .eq("id", id)
    .order("lap_number", { referencedTable: "project_laps" })
    .order("sort_order", { referencedTable: "project_images" })
    .maybeSingle();

  if (error) throw error;
  return data ? toProject(data) : null;
}
