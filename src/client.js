import { createClient } from "@supabase/supabase-js";

const URL = "https://rljmtufsqxmljwfkuyvd.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsam10dWZzcXhtbGp3Zmt1eXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMDI4OTgsImV4cCI6MjAzNzg3ODg5OH0.lhhZtiaRg0e4AIXkvUXXu9LKkrNNgmE4vV6ek1kfOjU";

export const supabase = createClient(URL, API_KEY);
