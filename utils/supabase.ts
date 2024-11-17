import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string | undefined;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and Key must be defined in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);