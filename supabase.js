import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://trvofghinjbdlrqbddig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydm9mZ2hpbmpiZGxycWJkZGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNzMwMjQsImV4cCI6MjAwNTk0OTAyNH0.KI5HVz26yehZ4mr-zsfCMTqIoOTpmEjNwkINrNGPerE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
