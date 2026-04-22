import { useEffect } from "react";
import { categories } from "../../data/portfolio";

/**
 * Modal de détail d'un projet.
 * - Fermeture : clic sur backdrop, bouton ou touche Echap
 * - Animation d'entrée slide-up
 */
export default function ProjectModal({ project, onClose }) {
  // Bloquer le scroll du body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!project) return null;

  const catLabel =
    categories.find((c) => c.id === project.category)?.label || project.category;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "modalFadeIn 0.3s ease forwards",
      }}
    >
      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 680,
          width: "100%",
          borderRadius: "24px",
          background: "#0d0d18",
          border: `1px solid ${project.color}35`,
          overflow: "hidden",
          animation: "modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          boxShadow: `0 40px 100px rgba(0,0,0,0.65), 0 0 60px ${project.color}12`,
        }}
      >
        {/* ── Header visuel ── */}
        <div
          style={{
            height: 210,
            background: `
              linear-gradient(145deg, ${project.color}28 0%, #0d0d18 65%),
              radial-gradient(ellipse at 75% 50%, ${project.color}18, transparent 70%)
            `,
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            padding: "0 36px 30px",
            borderBottom: `1px solid ${project.color}15`,
          }}
        >
          {/* Numéro décoratif */}
          <div
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 150,
              letterSpacing: "-8px",
              color: `${project.color}07`,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {String(project.id).padStart(2, "0")}
          </div>

          {/* Cercles déco */}
          <div
            style={{
              position: "absolute",
              width: 130,
              height: 130,
              borderRadius: "50%",
              border: `1px solid ${project.color}12`,
              right: 55,
              top: 20,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 75,
              height: 75,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${project.color}18, transparent 70%)`,
              right: 90,
              top: 44,
              pointerEvents: "none",
            }}
          />

          {/* Contenu header */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: project.color,
                background: `${project.color}18`,
                border: `1px solid ${project.color}40`,
                padding: "5px 14px",
                borderRadius: "100px",
                marginBottom: 14,
              }}
            >
              {catLabel}
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(26px, 4vw, 40px)",
                letterSpacing: "3px",
                color: "#fff",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h2>
          </div>

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.6)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            }}
          >
            ✕
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: "30px 36px 36px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.5px",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            {project.subtitle}
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 28,
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "6px 14px",
                  borderRadius: "6px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "1px",
              }}
            >
              Touche ESC pour fermer
            </span>
            <button
              onClick={onClose}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "12px 28px",
                borderRadius: "8px",
                background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)`,
                color: "#000",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 24px ${project.color}50`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Fermer ✕
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}
