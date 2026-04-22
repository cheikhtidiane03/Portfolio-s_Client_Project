import { useEffect, useState } from "react";

/**
 * Splash screen animé au chargement.
 * Affiche logo MB + barre de progression puis disparaît en fondu.
 */
export default function PageLoader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let p = 0;

    const interval = setInterval(() => {
      // Progression aléatoire pour un rendu naturel
      p += Math.random() * 15 + 6;

      if (p >= 100) {
        p = 100;
        setProgress(100);
        clearInterval(interval);

        // Pause à 100% puis sortie en fondu
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 650);
        }, 350);
      } else {
        setProgress(Math.floor(p));
      }
    }, 75);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#08080C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* Cercles rotatifs décoratifs */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.06)",
          animation: "loaderSpin 10s linear infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.10)",
          animation: "loaderSpin 6s linear infinite reverse",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 140,
          height: 140,
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.07)",
          animation: "loaderSpin 4s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* Logo MB */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "20px",
          background: "linear-gradient(135deg, #FFD700, #FF6B00)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 900,
          fontSize: 28,
          color: "#000",
          marginBottom: 28,
          boxShadow: "0 0 50px rgba(255,215,0,0.35)",
          zIndex: 1,
        }}
      >
        MB
      </div>

      {/* Nom */}
      <div
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: 30,
          letterSpacing: "10px",
          color: "#fff",
          marginBottom: 6,
          zIndex: 1,
        }}
      >
        MOUSSA BA
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)",
          marginBottom: 52,
          zIndex: 1,
        }}
      >
        Designer Graphique
      </div>

      {/* Barre de progression */}
      <div
        style={{
          width: 200,
          height: 2,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          overflow: "hidden",
          marginBottom: 14,
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #FFD700, #FF8C00)",
            borderRadius: 2,
            transition: "width 0.1s ease",
            boxShadow: "0 0 10px rgba(255,215,0,0.6)",
          }}
        />
      </div>

      {/* Pourcentage */}
      <div
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: 20,
          letterSpacing: "3px",
          color: "rgba(255,215,0,0.55)",
          zIndex: 1,
        }}
      >
        {progress}%
      </div>

      <style>{`
        @keyframes loaderSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
