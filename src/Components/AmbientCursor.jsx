import { useEffect, useRef } from "react";

/**
 * Subtle desktop-only cursor halo — disabled for coarse pointers / reduced motion.
 */
export default function AmbientCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    const coarse =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse) return undefined;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return undefined;

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.22;
      current.current.y += (target.current.y - current.current.y) * 0.22;
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      const scale = Math.min(1 + Math.hypot(dx, dy) * 0.008, 1.45);

      ring.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      dot.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-accent/40 md:block"
        style={{ willChange: "transform" }}
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1 w-1 rounded-full bg-accent md:block"
        style={{ willChange: "transform" }}
        aria-hidden
      />
    </>
  );
}
