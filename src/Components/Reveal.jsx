/* eslint-disable react/prop-types -- layout primitive */
import { useEffect, useRef } from "react";

/**
 * Scroll-triggered fade / translate reveal; respects prefers-reduced-motion.
 */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.remove("opacity-0", "translate-y-10");
      el.classList.add("opacity-100", "translate-y-0");
      return undefined;
    }

    el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10");
          el.classList.add("opacity-100", "translate-y-0");
          io.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`translate-y-10 opacity-0 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </Tag>
  );
}
