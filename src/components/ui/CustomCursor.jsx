import { useEffect, useRef, useState } from "react";

/**
 * Curseur personnalisé doré (desktop uniquement).
 * - Anneau extérieur qui suit en douceur (lag fluide)
 * - Point central instantané
 * - Grossit au survol des éléments interactifs
 * - Se réduit au clic
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 900;

  useEffect(() => {
    if (isMobile) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot suit instantanément
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    // Survol des éléments interactifs
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    // Observer les liens et boutons dynamiquement
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Attach initial
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Animation loop pour le lag de l'anneau
    let rafId;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Anneau extérieur (suit avec lag) */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: hovering ? 52 : clicking ? 22 : 36,
          height: hovering ? 52 : clicking ? 22 : 36,
          borderRadius: "50%",
          border: hovering
            ? "2px solid #FFD700"
            : "1.5px solid rgba(255, 215, 0, 0.55)",
          background: hovering ? "rgba(255,215,0,0.07)" : "transparent",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          transition:
            "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease",
        }}
      />
      {/* Point central (instantané) */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: clicking ? 7 : 4,
          height: clicking ? 7 : 4,
          borderRadius: "50%",
          background: "#FFD700",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.12s ease, height 0.12s ease",
          boxShadow: "0 0 6px rgba(255,215,0,0.8)",
        }}
      />
      <style>{`
        @media (min-width: 900px) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
