import { createClient } from "@supabase/supabase-js";

const raw = (import.meta.env.VITE_SUPABASE_URL || "").trim().replace(/^["']|["']$/g, "");
const key = (import.meta.env.VITE_SUPABASE_ANON_KEY || "").trim().replace(/^["']|["']$/g, "");
let url = "";
try { url = new URL(raw).origin; } catch { url = ""; }

export const supa = url && key ? createClient(url, key) : null;
