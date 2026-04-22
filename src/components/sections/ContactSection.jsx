import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { designer } from "../../data/portfolio";

const INPUT_STYLE = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  color: "#fff",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.25s ease, background 0.25s ease",
};

function Field({ label, children }) {
  return (
    <div>
      <label style={{
        display: "block",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 10,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.3)",
        marginBottom: 8,
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function focusIn(e) {
  e.currentTarget.style.borderColor = "rgba(255,215,0,0.45)";
  e.currentTarget.style.background  = "rgba(255,215,0,0.04)";
}
function focusOut(e) {
  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
  e.currentTarget.style.background  = "rgba(255,255,255,0.03)";
}

export default function ContactSection() {
  const { ref, inView } = useInView(0.08);
  const [form, setForm]         = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${designer.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const contactItems = [
    { emoji: "📞", label: "Téléphone / WhatsApp", value: designer.phone, href: `tel:${designer.phone}` },
    { emoji: "✉️", label: "Email",                value: designer.email, href: `mailto:${designer.email}` },
    { emoji: "📍", label: "Localisation",          value: designer.location },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 0 80px",
        background: "linear-gradient(180deg, #0d0d16 0%, #08080C 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow bas */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 900,
        height: 320,
        background: "radial-gradient(ellipse, rgba(255,140,0,0.055) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>

        {/* Header centré */}
        <div style={{
          textAlign: "center",
          marginBottom: 80,
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
            05 — Contact
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(40px, 7vw, 86px)",
            letterSpacing: "4px",
            color: "#fff",
            margin: "12px 0 16px",
            lineHeight: 1,
          }}>
            Travaillons Ensemble
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.38)",
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.85,
          }}>
            Vous avez un projet en tête ? Contactez-moi pour discuter de vos besoins créatifs.
          </p>
        </div>

        {/* Grid 2 colonnes */}
        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56, alignItems: "start" }}
        >
          {/* ── Gauche : infos ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-28px)",
            transition: "all 0.9s ease 0.15s",
          }}>
            {/* Carte infos */}
            <div style={{
              padding: "34px",
              borderRadius: "20px",
              border: "1px solid rgba(255,215,0,0.1)",
              background: "rgba(255,215,0,0.02)",
              marginBottom: 18,
            }}>
              <h3 style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 26,
                letterSpacing: "3px",
                color: "#fff",
                margin: "0 0 24px",
              }}>
                Informations
              </h3>
              {contactItems.map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 9,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.28)",
                      marginBottom: 4,
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
                        color: "rgba(255,255,255,0.68)",
                      }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${designer.socials.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "16px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 24px rgba(37,211,102,0.28)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 34px rgba(37,211,102,0.42)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,211,102,0.28)";
              }}
            >
              <span style={{ fontSize: 22 }}>💬</span>
              Discuter sur WhatsApp
            </a>
          </div>

          {/* ── Droite : formulaire ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(28px)",
            transition: "all 0.9s ease 0.28s",
          }}>
            <form onSubmit={handleSubmit}>
              {/* Nom + Email */}
              <div
                className="form-row"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
              >
                <Field label="Nom">
                  <input
                    required
                    type="text"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={update("name")}
                    style={INPUT_STYLE}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={update("email")}
                    style={INPUT_STYLE}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </Field>
              </div>

              {/* Sujet */}
              <div style={{ marginBottom: 14 }}>
                <Field label="Sujet">
                  <input
                    required
                    type="text"
                    placeholder="Objet de votre demande"
                    value={form.subject}
                    onChange={update("subject")}
                    style={INPUT_STYLE}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </Field>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <Field label="Message">
                  <textarea
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    value={form.message}
                    onChange={update("message")}
                    style={{ ...INPUT_STYLE, resize: "vertical", minHeight: 140 }}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </Field>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "10px",
                  background: submitted
                    ? "linear-gradient(135deg, #4CAF50, #388E3C)"
                    : "linear-gradient(135deg, #FFD700, #FF8C00)",
                  color: "#000",
                  border: "none",
                  cursor: submitted ? "default" : "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 12,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  boxShadow: submitted
                    ? "0 8px 30px rgba(76,175,80,0.38)"
                    : "0 8px 30px rgba(255,215,0,0.28)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!submitted) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 14px 40px rgba(255,215,0,0.44)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = submitted
                    ? "0 8px 30px rgba(76,175,80,0.38)"
                    : "0 8px 30px rgba(255,215,0,0.28)";
                }}
              >
                {submitted ? "✓ Message envoyé avec succès !" : "Envoyer le message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
