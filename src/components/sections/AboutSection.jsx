import { useInView, useCountUp } from "../../hooks/useInView";
import { designer, stats } from "../../data/portfolio";

const ADOBE_APPS = [
  { label: "Ps", color: "#31A8FF", bg: "#001E36" },
  { label: "Ai", color: "#FF9A00", bg: "#1C0A00" },
  { label: "Pr", color: "#9999FF", bg: "#0F0040" },
  { label: "Id", color: "#FF3366", bg: "#1A0010" },
  { label: "Lr", color: "#31A8FF", bg: "#001E36" },
  { label: "Au", color: "#9999FF", bg: "#0F0040" },
];

function StatCard({ stat, inView }) {
  const suffix = stat.value.replace(/[0-9]/g, "");
  const num = useCountUp(stat.value, 1600, inView);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "22px 14px",
        borderRadius: "14px",
        border: "1px solid rgba(255,215,0,0.09)",
        background: "rgba(255,215,0,0.02)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,215,0,0.06)";
        e.currentTarget.style.borderColor = "rgba(255,215,0,0.22)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(255,215,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,215,0,0.02)";
        e.currentTarget.style.borderColor = "rgba(255,215,0,0.09)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(36px, 5vw, 54px)",
          letterSpacing: "2px",
          background: "linear-gradient(135deg, #FFD700, #FF8C00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
        }}
      >
        {num}{suffix}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.38)",
          marginTop: 6,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, inView } = useInView(0.1);

  const infoItems = [
    { emoji: "📍", label: "Localisation", value: designer.location },
    { emoji: "📞", label: "Téléphone",    value: designer.phone, href: `tel:${designer.phone}` },
    { emoji: "✉️", label: "Email",        value: designer.email, href: `mailto:${designer.email}` },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "#08080C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow droit */}
      <div style={{
        position: "absolute",
        right: -100,
        top: "50%",
        transform: "translateY(-50%)",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,140,0,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Section header */}
        <div
          style={{
            marginBottom: 72,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#FFD700",
            fontWeight: 600,
          }}>
            01 — À Propos
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(40px, 6vw, 72px)",
            letterSpacing: "4px",
            color: "#fff",
            margin: "10px 0 0",
            lineHeight: 1,
          }}>
            Qui suis-je ?
          </h2>
        </div>

        {/* Grid 2 colonnes */}
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}
        >
          {/* ── Gauche : texte + infos ── */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-28px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s",
            }}
          >
            <div style={{
              width: 48,
              height: 4,
              background: "linear-gradient(90deg, #FFD700, #FF8C00)",
              borderRadius: 2,
              marginBottom: 28,
            }} />

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.72)",
              marginBottom: 22,
            }}>
              {designer.bio}
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(13px, 1.5vw, 15px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.45)",
              marginBottom: 40,
            }}>
              {designer.bio2}
            </p>

            {/* Infos de contact */}
            {infoItems.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ fontSize: 18, flexShrink: 0 }}>{item.emoji}</span>
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                    marginBottom: 3,
                  }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: "#FFD700",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.72)",
                    }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Droite : stats + logos ── */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(28px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s",
            }}
          >
            {/* Stats grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              marginBottom: 40,
            }}>
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} inView={inView} />
              ))}
            </div>

            {/* Logos Adobe */}
            <div style={{
              padding: "26px 28px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.015)",
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: 18,
              }}>
                Logiciels maîtrisés
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {ADOBE_APPS.map((app) => (
                  <div
                    key={app.label}
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "11px",
                      background: app.bg,
                      border: `1px solid ${app.color}28`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: 14,
                      color: app.color,
                      transition: "all 0.22s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.18)";
                      e.currentTarget.style.boxShadow = `0 4px 20px ${app.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {app.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
