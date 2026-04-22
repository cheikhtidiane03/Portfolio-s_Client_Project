import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { projects, categories } from "../../data/portfolio";
import ProjectModal from "../ui/ProjectModal";

/* ── Carte de projet ── */
function ProjectCard({ project, index, inView, onClick }) {
  const [hovered, setHovered] = useState(false);
  const catLabel =
    categories.find((c) => c.id === project.category)?.label || project.category;

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onClick(project)}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        aspectRatio: "4/5",
        background: `linear-gradient(150deg, ${project.color}1E 0%, #0d0d16 100%)`,
        border: `1px solid ${project.color}22`,
        boxShadow: hovered ? `0 20px 60px ${project.color}28` : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: [
          `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.07}s`,
          `transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.07}s`,
          "box-shadow 0.3s ease",
        ].join(", "),
      }}
    >
      {/* Overlay hover */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${project.color}12, transparent 55%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.45s ease",
        pointerEvents: "none",
      }} />

      {/* Cercles décoratifs */}
      <div style={{
        position: "absolute",
        right: 16,
        top: "48%",
        transform: `translateY(-50%) scale(${hovered ? 1.18 : 1})`,
        width: 118,
        height: 118,
        borderRadius: "50%",
        border: `1px solid ${project.color}18`,
        transition: "all 0.5s ease",
        opacity: hovered ? 1 : 0.4,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        right: 38,
        top: "48%",
        transform: `translateY(-50%) scale(${hovered ? 1.1 : 1})`,
        width: 68,
        height: 68,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${project.color}20, transparent 70%)`,
        transition: "all 0.4s ease",
        pointerEvents: "none",
      }} />

      {/* Numéro décoratif */}
      <div style={{
        position: "absolute",
        bottom: 56,
        left: 18,
        fontFamily: "'Bebas Neue', cursive",
        fontSize: 88,
        letterSpacing: "-5px",
        color: `${project.color}07`,
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
      }}>
        {String(project.id).padStart(2, "0")}
      </div>

      {/* Content */}
      <div style={{
        position: "absolute",
        inset: 0,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: project.color,
            background: `${project.color}16`,
            border: `1px solid ${project.color}38`,
            padding: "5px 11px",
            borderRadius: "100px",
          }}>
            {catLabel}
          </span>

          {/* Arrow button */}
          <div style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: `1px solid ${hovered ? project.color : "rgba(255,255,255,0.1)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            transform: hovered ? "rotate(-45deg) scale(1.1)" : "rotate(0)",
            background: hovered ? project.color : "transparent",
            color: hovered ? "#000" : "rgba(255,255,255,0.45)",
            transition: "all 0.3s ease",
            flexShrink: 0,
          }}>
            ↗
          </div>
        </div>

        {/* Bottom info */}
        <div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "1px",
            marginBottom: 5,
            textTransform: "uppercase",
          }}>
            {project.subtitle}
          </p>
          <h3 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(20px, 2.4vw, 26px)",
            letterSpacing: "1.5px",
            color: "#fff",
            margin: "0 0 12px",
            lineHeight: 1.1,
          }}>
            {project.title}
          </h3>

          {/* Tags */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.32)",
                background: "rgba(255,255,255,0.04)",
                padding: "3px 9px",
                borderRadius: "4px",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Section Portfolio ── */
export default function PortfolioSection() {
  const { ref, inView }             = useInView(0.05);
  const [filter, setFilter]         = useState("all");
  const [selected, setSelected]     = useState(null);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section
        id="portfolio"
        ref={ref}
        style={{
          padding: "120px 0",
          background: "linear-gradient(180deg, #08080C 0%, #0d0d16 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 40px" }}>

          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}>
            <div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#FFD700",
                fontWeight: 600,
              }}>
                02 — Portfolio
              </span>
              <h2 style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(38px, 6vw, 72px)",
                letterSpacing: "4px",
                color: "#fff",
                margin: "10px 0 0",
                lineHeight: 1,
              }}>
                Mes Réalisations
              </h2>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              maxWidth: 280,
              lineHeight: 1.75,
              textAlign: "right",
            }}>
              Cliquez sur un projet pour voir tous les détails.
            </p>
          </div>

          {/* Filters */}
          <div style={{
            display: "flex",
            gap: 8,
            marginBottom: 44,
            flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}>
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    padding: "9px 18px",
                    borderRadius: "100px",
                    border: isActive ? "1px solid #FFD700" : "1px solid rgba(255,255,255,0.1)",
                    background: isActive
                      ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                      : "transparent",
                    color: isActive ? "#000" : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    }
                  }}
                >
                  {cat.label}
                  <span style={{
                    marginLeft: 6,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    opacity: 0.6,
                  }}>
                    {cat.id === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 18,
          }}>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                onClick={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
