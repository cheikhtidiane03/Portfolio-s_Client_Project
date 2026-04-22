import { useEffect, useRef, useState } from "react";

/**
 * Hook qui détecte quand un élément entre dans le viewport.
 * @param {number} threshold - Pourcentage de visibilité pour déclencher (0.0 – 1.0)
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Une fois visible, on arrête d'observer (animation one-shot)
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/**
 * Hook qui anime un nombre de 0 jusqu'à `target`.
 * @param {string} target - Valeur cible (ex: "50+", "3+")
 * @param {number} duration - Durée en ms
 * @param {boolean} inView - Démarrer quand true
 */
export function useCountUp(target, duration = 1500, inView = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const numericTarget = parseInt(target, 10);
    if (isNaN(numericTarget)) return;

    const step = numericTarget / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, inView]);

  return count;
}
