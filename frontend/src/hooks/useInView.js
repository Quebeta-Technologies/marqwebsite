import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver-driven trigger. Sets visible=true the first time
 * the element scrolls into view, then disconnects.
 */
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options.threshold]);
  return [ref, visible];
}
