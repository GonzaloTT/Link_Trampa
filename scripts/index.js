const { createClient } = supabase;

// 🔑 Configuración de Supabase
const supabaseUrl = "https://erapblchgowqamubvxgp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyYXBibGNoZ293cWFtdWJ2eGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMzc3NjAsImV4cCI6MjA3MTkxMzc2MH0.4GzmMUcmdCZzhz8Yr52gFbCKqFf1WiEVXRadxEzhwwo"; // ⚠️ Usar solo la clave pública
const db = createClient(supabaseUrl, supabaseKey);

// Extraer correo del query string
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

if (email) {
  const saveClick = async () => {
    const { data, error } = await db
      .from("phishing_clicks")
      .insert([{ email: email, timestamp: new Date() }]);

    if (error) {
      console.error("❌ Error guardando:", error);
    } else {
      console.log("✅ Click registrado:", data);
    }
  };

  saveClick();
}
