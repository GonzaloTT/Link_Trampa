// Conectar con Supabase
  const SUPABASE_URL = "https://mmntgtbhzibafsnhyzvk.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tbnRndGJoemliYWZzbmh5enZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMjI1MDEsImV4cCI6MjA3MTc5ODUwMX0.9vfd3tHLJBlqEP7A9SX2fnhGCxtsFX0lnwscPky4xTs";

  const { createClient } = supabase;
  const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const button = document.querySelector(".button");

  async function registrarClic() {
    try {
      // Obtener navegador y sistema
      const userAgent = navigator.userAgent;

      // Obtener IP usando servicio externo
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();

      // Insertar registro en Supabase
      const { error } = await db
        .from("clicks")
        .insert([{ ip: ipData.ip, user_agent: userAgent }]);

      if (error) {
        console.error("❌ Error al registrar:", error);
      } else {
        alert("🚨 Este fue un simulacro de ciberseguridad. No compartas información en enlaces sospechosos.");
      }
    } catch (e) {
      console.error("❌ Error general:", e);
    }
  }

  // Asignar evento al botón
  button.addEventListener("click", registrarClic);