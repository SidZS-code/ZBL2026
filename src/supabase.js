import { createClient } from "@supabase/supabase-js";
const rawUrl = (import.meta.env.VITE_SUPABASE_URL || "").trim().replace(/^["']|["']$/g, "");
const rawKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || "").trim().replace(/^["']|["']$/g, "");
let url = "";
try {
  url = new URL(rawUrl).origin; // keeps only https://xxxx.supabase.co and drops /rest/v1/ or any extras
} catch {
  url = "";
}
export const supabase = url && rawKey ? createClient(url, rawKey) : null;
