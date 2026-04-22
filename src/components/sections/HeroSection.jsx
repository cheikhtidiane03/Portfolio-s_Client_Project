import { useEffect, useRef, useState } from "react";
import { designer } from "../../data/portfolio";

const TYPEWRITER_WORDS = ["Graphiste", "Créatif Visuel", "Concepteur", "Designer"];

export default function HeroSection() {
  const [mounted, setMounted]   = useState(false);
  const [word, setWord]         = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  /* ── Mount fade-in ── */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const target = TYPEWRITER_WORDS[wordIdx];
    let timeout;

    if (!deleting && word.length < target.length) {
      timeout = setTimeout(() => setWord(target.slice(0, word.length + 1)), 80);
    } else if (!deleting && word.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && word.length > 0) {
      timeout = setTimeout(() => setWord(word.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % TYPEWRITER_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [word, deleting, wordIdx]);

  /* ── Canvas particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.45 + 0.08,
    }));

    let rafId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,215,0,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      rafId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 20% 55%, #1a0800 0%, #08080C 55%, #000410 100%)",
      }}
    >
      {/* Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.55,
        }}
      />

      {/* Glows */}
      <div style={{
        position: "absolute",
        width: 700,
        height: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,140,0,0.07) 0%, transparent 70%)",
        top: "-15%",
        right: "-15%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: 450,
        height: 450,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)",
        bottom: "5%",
        left: "-8%",
        pointerEvents: "none",
      }} />

      {/* Big watermark text */}
      <div style={{
        position: "absolute",
        bottom: "-6%",
        left: "-2%",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "clamp(80px, 18vw, 220px)",
        color: "rgba(255,215,0,0.025)",
        letterSpacing: "-5px",
        userSelect: "none",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        lineHeight: 1,
      }}>
        GRAPHISTE
      </div>

      {/* Main content */}
      <div
        style={{
          textAlign: "center",
          zIndex: 1,
          padding: "0 24px",
          maxWidth: 900,
        }}
      >
        {/* Badge disponible */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,215,0,0.07)",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: "100px",
            padding: "7px 20px",
            marginBottom: 32,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          <span style={{
            display: "inline-block",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4CAF50",
            boxShadow: "0 0 6px rgba(76,175,80,0.8)",
            animation: "heroPulse 2s ease-in-out infinite",
          }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#FFD700",
            fontWeight: 600,
          }}>
            Disponible pour des projets
          </span>
        </div>

        {/* Prénom */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(58px, 12vw, 130px)",
            letterSpacing: "8px",
            lineHeight: 0.92,
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.25s",
          }}
        >
          <span style={{ display: "block", color: "#fff" }}>MOUSSA</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, #FFD700 0%, #FF8C00 60%, #FF4500 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BA
          </span>
        </h1>

        {/* Typewriter */}
        <div
          style={{
            marginTop: 22,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            letterSpacing: "1px",
            minHeight: 44,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 0.5s",
          }}
        >
          {word}
          <span style={{
            display: "inline-block",
            width: 2,
            height: "0.9em",
            background: "#FFD700",
            marginLeft: 3,
            verticalAlign: "middle",
            animation: "heroBlink 1s step-end infinite",
          }} />
        </div>

        {/* Tagline */}
        <p
          style={{
            marginTop: 14,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(13px, 1.5vw, 16px)",
            color: "rgba(255,255,255,0.28)",
            fontStyle: "italic",
            letterSpacing: "0.5px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 0.7s",
          }}
        >
          "{designer.tagline}"
        </p>

        {/* CTA buttons */}
        <div
          style={{
            marginTop: 52,
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.85s",
          }}
        >
          <button
            onClick={() =>
              document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "16px 38px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #FFD700, #FF8C00)",
              color: "#000",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 36px rgba(255,215,0,0.32)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(255,215,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 36px rgba(255,215,0,0.32)";
            }}
          >
            Voir mon travail
          </button>

          <a
            href={`mailto:${designer.email}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "16px 38px",
              borderRadius: "8px",
              background: "transparent",
              color: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,255,255,0.18)",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Me contacter
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: 90,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: mounted ? 0.35 : 0,
            transition: "opacity 1.2s ease 1.2s",
            animation: mounted ? "heroFloat 2.4s ease-in-out infinite" : "none",
          }}
        >
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#fff",
          }}>
            Scroll
          </span>
          <div style={{
            width: 1,
            height: 52,
            background: "linear-gradient(to bottom, rgba(255,215,0,0.9), transparent)",
          }} />
        </div>
      </div>

      <style>{`
        @keyframes heroBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes heroPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
        @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
      `}</style>
    </section>
  );
}
