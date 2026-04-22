import { useInView } from "../../hooks/useInView";
import { skills, services } from "../../data/portfolio";

/* ── Barre de compétence ── */
function SkillBar({ skill, inView, delay }) {
  return (
    <div style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-18px)",
      transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {/* Label + niveau */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: "9px",
            background: `${skill.color}16`,
            border: `1px solid ${skill.color}38`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: 12,
            color: skill.color,
            flexShrink: 0,
          }}>
            {skill.icon}
          </div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
          }}>
            {skill.name}
          </span>
        </div>
        <span style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: 22,
          letterSpacing: "1px",
          color: skill.color,
        }}>
          {skill.level}%
        </span>
      </div>

      {/* Barre */}
      <div style={{
        height: 4,
        borderRadius: 4,
        background: "rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: inView ? `${skill.level}%` : "0%",
          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}70)`,
          borderRadius: 4,
          transition: `width 1.3s cubic-bezier(0.16,1,0.3,1) ${delay + 0.2}s`,
          boxShadow: `0 0 10px ${skill.color}55`,
        }} />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "#08080C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ligne décorative verticale centrale */}
      <div style={{
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: 1,
        background: "rgba(255,255,255,0.015)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{
          marginBottom: 72,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.8s ease",
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#FFD700",
            fontWeight: 600,
          }}>
            04 — Compétences
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(38px, 6vw, 72px)",
            letterSpacing: "4px",
            color: "#fff",
            margin: "10px 0 0",
            lineHeight: 1,
          }}>
            Mon Expertise
          </h2>
        </div>

        {/* Grid 2 colonnes */}
        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}
        >
          {/* ── Barres de compétences ── */}
          <div>
            <h3 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 28,
              opacity: inView ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}>
              Suite Adobe
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  inView={inView}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>

          {/* ── Services ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(26px)",
            transition: "all 0.9s ease 0.25s",
          }}>
            <h3 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 28,
            }}>
              Services proposés
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {services.map((service, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 22px",
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.055)",
                    background: "rgba(255,255,255,0.018)",
                    display: "flex",
                    gap: 15,
                    transition: "all 0.28s ease",
                    cursor: "default",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(18px)",
                    transitionDelay: `${0.3 + i * 0.09}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,215,0,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.14)";
                    e.currentTarget.style.transform = "translateX(7px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.018)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.055)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: 26, flexShrink: 0, marginTop: 1 }}>
                    {service.icon}
                  </span>
                  <div>
                    <h4 style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#fff",
                      margin: "0 0 5px",
                    }}>
                      {service.title}
                    </h4>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.42)",
                      margin: 0,
                    }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
