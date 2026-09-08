// ============================================
// CONEXIÓN A SUPABASE
// Solo se usa para guardar el historial de
// certificados y calcular la numeración anual.
// La web sigue siendo de acceso abierto (sin login).
//
// La "anon key" es pública por diseño (va en el
// navegador). La seguridad la dan las políticas RLS
// de la tabla "certificados" (ver supabase-setup.sql).
// ============================================
const SUPABASE_CONFIG = {
  url: "https://wvomxxaulgiwosoxcabu.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2b214eGF1bGdpd29zb3hjYWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4MjcyMzIsImV4cCI6MjEwNDQwMzIzMn0.q_Q3Hw3QdSXvtRzRhbQulsZiNMyxSewihQl-TubYYzs"
};
// ============================================
// FIN CONEXIÓN A SUPABASE
// ============================================
