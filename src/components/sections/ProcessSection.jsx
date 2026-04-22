import { useInView } from "../../hooks/useInView";
import { processSteps } from "../../data/portfolio";

export default function ProcessSection() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="process"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "#0a0a11",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Séparateurs haut/bas */}
      {["top", "bottom"].map((pos) => (
        <div
          key={pos}
          style={{
            position: "absolute",
            [pos]: 0,
            left: "8%",
            right: "8%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.15), transparent)",
          }}
        />
      ))}

      {/* Watermark */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "clamp(90px, 18vw, 240px)",
        letterSpacing: "-8px",
        color: "rgba(255,215,0,0.013)",
        userSelect: "none",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        lineHeight: 1,
      }}>
        PROCESS
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{
          marginBottom: 72,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(28px)",
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
            03 — Mon Processus
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(38px, 6vw, 72px)",
            letterSpacing: "4px",
            color: "#fff",
            margin: "10px 0 14px",
            lineHeight: 1,
          }}>
            Comment je travaille
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.38)",
            maxWidth: 460,
            lineHeight: 1.8,
          }}>
            Une approche structurée pour transformer chaque idée en un visuel impactant et mémorable.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 20,
        }}>
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(36px)",
                transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.11}s`,
              }}
            >
              <div
                style={{
                  padding: "30px 26px",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.018)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(255,215,0,0.04)`;
                  e.currentTarget.style.borderColor = `rgba(255,215,0,0.14)`;
                  e.currentTarget.style.transform = "translateY(-7px)";
                  e.currentTarget.style.boxShadow = "0 22px 55px rgba(255,215,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.018)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icône + numéro */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                  <div style={{
                    width: 46,
                    height: 46,
                    borderRadius: "12px",
                    background: `${step.color}14`,
                    border: `1px solid ${step.color}28`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <span style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 48,
                    letterSpacing: "-1px",
                    color: `${step.color}1A`,
                    lineHeight: 1,
                  }}>
                    {step.number}
                  </span>
                </div>

                {/* Barre accent */}
                <div style={{
                  width: 30,
                  height: 3,
                  background: `linear-gradient(90deg, ${step.color}, transparent)`,
                  borderRadius: 2,
                  marginBottom: 16,
                }} />

                <h3 style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: 24,
                  letterSpacing: "2px",
                  color: "#fff",
                  margin: "0 0 10px",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.42)",
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
