import { designer } from "../../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#08080C",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "36px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {/* Logo + nom */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "8px",
              background: "linear-gradient(135deg, #FFD700, #FF6B00)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: 12,
              color: "#000",
            }}
          >
            MB
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 15,
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            MOUSSA BA
          </span>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            margin: 0,
            textAlign: "center",
          }}
        >
          © {year} Moussa Ba · Designer Graphique · {designer.location}
        </p>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.18)",
            margin: 0,
            fontStyle: "italic",
          }}
        >
          Conçu avec passion ✦
        </p>
      </div>
    </footer>
  );
}
