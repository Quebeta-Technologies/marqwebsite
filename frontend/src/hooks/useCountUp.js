import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target when `start` becomes true.
 * decimals controls displayed precision (e.g. 1 for "1.5").
 */
export default function useCountUp(target, { duration = 1800, decimals = 0, start = false } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(eased * target);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  const display = decimals === 0 ? Math.round(value) : value.toFixed(decimals);
  return display;
}
