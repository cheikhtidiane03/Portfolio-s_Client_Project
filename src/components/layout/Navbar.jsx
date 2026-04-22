import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#hero",      label: "Accueil" },
  { href: "#about",     label: "À Propos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process",   label: "Processus" },
  { href: "#skills",    label: "Compétences" },
  { href: "#contact",   label: "Contact" },
];

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("#hero");
  const [menuOpen, setMenuOpen]   = useState(false);

  // Détection du scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mise à jour de la section active via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 48px" : "22px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.4s ease, background 0.4s ease, border-bottom 0.4s ease",
          background: scrolled ? "rgba(8, 8, 12, 0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,215,0,0.08)" : "1px solid transparent",
        }}
      >
        {/* ── Logo ── */}
        <div
          onClick={() => handleNav("#hero")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #FFD700, #FF6B00)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: 15,
              color: "#000",
              flexShrink: 0,
              boxShadow: "0 2px 14px rgba(255,215,0,0.35)",
            }}
          >
            MB
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 19,
              letterSpacing: "3px",
              color: "#fff",
            }}
          >
            MOUSSA BA
          </span>
        </div>

        {/* ── Desktop nav ── */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            listStyle: "none",
            gap: 28,
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: isActive
                      ? "2px solid #FFD700"
                      : "2px solid transparent",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: isActive ? 700 : 400,
                    color: isActive ? "#FFD700" : "rgba(255,255,255,0.65)",
                    padding: "4px 0",
                    transition: "color 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* ── CTA Desktop ── */}
        <a
          className="cta-btn"
          href="mailto:mba72900@gmail.com"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontWeight: 700,
            padding: "10px 22px",
            borderRadius: "6px",
            background: "linear-gradient(135deg, #FFD700, #FF8C00)",
            color: "#000",
            textDecoration: "none",
            transition: "transform 0.25s, box-shadow 0.25s",
            boxShadow: "0 4px 20px rgba(255,215,0,0.28)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,215,0,0.48)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,215,0,0.28)";
          }}
        >
          Me contacter
        </a>

        {/* ── Hamburger Mobile ── */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#FFD700",
                borderRadius: 2,
                transition: "transform 0.3s, opacity 0.3s",
                transform:
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translateY(10px)"
                    : i === 2 ? "rotate(-45deg) translateY(-10px)"
                    : "none"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Menu mobile overlay ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(8,8,12,0.97)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          pointerEvents: menuOpen ? "all" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 44,
              letterSpacing: "4px",
              color: active === link.href ? "#FFD700" : "rgba(255,255,255,0.8)",
              transition: "color 0.2s",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: `${i * 0.05}s`,
            }}
          >
            {link.label}
          </button>
        ))}
        <a
          href="mailto:mba72900@gmail.com"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "14px 36px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #FFD700, #FF8C00)",
            color: "#000",
            textDecoration: "none",
            marginTop: 8,
          }}
        >
          Me contacter
        </a>
      </div>
    </>
  );
}
