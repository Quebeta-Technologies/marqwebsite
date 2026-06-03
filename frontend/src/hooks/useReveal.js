import { useEffect, useRef } from "react";

export default function useReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options.threshold]);
  return ref;
}
