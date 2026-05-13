import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 850;
const EXIT_MS = 480;

function initialPhase() {
  if (typeof window === "undefined") return "enter";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "gone" : "enter";
}

/**
 * Full-viewport intro shell — hides after load + minimum dwell time.
 * Skipped when `prefers-reduced-motion: reduce`.
 */
export default function PagePreloader() {
  const [phase, setPhase] = useState(initialPhase); // enter | exit | gone

  useEffect(() => {
    if (phase !== "enter") return undefined;

    document.body.dataset.preloaderActive = "true";

    const started = performance.now();
    let cancelled = false;
    const timeouts = [];

    const beginExit = () => {
      if (cancelled) return;
      const elapsed = performance.now() - started;
      const rest = Math.max(0, MIN_VISIBLE_MS - elapsed);
      timeouts.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setPhase("exit");
          timeouts.push(
            window.setTimeout(() => {
              if (cancelled) return;
              setPhase("gone");
              delete document.body.dataset.preloaderActive;
            }, EXIT_MS),
          );
        }, rest),
      );
    };

    if (document.readyState === "complete") {
      beginExit();
    } else {
      window.addEventListener("load", beginExit, { once: true });
    }

    return () => {
      cancelled = true;
      timeouts.forEach((id) => clearTimeout(id));
      window.removeEventListener("load", beginExit);
      delete document.body.dataset.preloaderActive;
    };
  }, [phase]);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      className={`fixed inset-0 z-[20000] flex touch-none flex-col items-center justify-center bg-void overscroll-none transition-opacity duration-[480ms] ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="sr-only">Loading portfolio</span>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(46, 230, 168, 0.14), transparent), radial-gradient(ellipse 60% 45% at 80% 90%, rgba(99, 102, 241, 0.12), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center px-6">
        <div className="relative grid h-20 w-20 place-items-center sm:h-24 sm:w-24">
          <span
            className="absolute inset-0 animate-preloader-orbit rounded-2xl border border-accent/40 shadow-[0_0_40px_-8px_rgba(46,230,168,0.45)]"
            aria-hidden
          />
          <span
            className="absolute inset-[3px] rounded-[0.85rem] border border-white/[0.06] bg-panel/90 backdrop-blur-sm"
            aria-hidden
          />
          <span className="relative font-mono text-xl font-bold tracking-tighter text-accent sm:text-2xl">
            DN
          </span>
        </div>

        <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.42em] text-slate-500">
          Loading
        </p>

        <div className="mt-5 h-px w-40 overflow-hidden rounded-full bg-white/[0.06] sm:w-48">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent animate-preloader-bar" />
        </div>
      </div>
    </div>
  );
}
