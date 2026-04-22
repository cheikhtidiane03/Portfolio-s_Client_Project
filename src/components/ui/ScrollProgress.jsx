import { useEffect, useState } from "react";

/**
 * Barre de progression de scroll en haut de page.
 * Dégradé doré avec effet de lueur.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
        background: "rgba(255,255,255,0.04)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #FFD700, #FF8C00, #FF4500)",
          boxShadow: "0 0 12px rgba(255, 215, 0, 0.7)",
          transition: "width 0.1s linear",
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}
