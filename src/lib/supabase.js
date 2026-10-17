import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error(
    "Supabase non configurato: controlla VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY in .env.local",
  );
}

// Senza configurazione il client non esiste: le sezioni che leggono dal database mostreranno l'errore
export const supabase = url && key ? createClient(url, key) : null;
