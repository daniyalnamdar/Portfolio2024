import { useEffect, useRef, useState } from "react";

function initialTheme() {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem("dn-theme") === "light" ? "light" : "dark";
}

export default function ThemeLighter() {
  const [theme, setTheme] = useState(initialTheme);
  const [transition, setTransition] = useState(null);
  const timers = useRef([]);
  const light = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("dn-theme", theme);
  }, [theme]);

  useEffect(
    () => () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    },
    [],
  );

  const toggleTheme = () => {
    if (transition) return;

    const next = light ? "dark" : "light";
    setTransition(next);
    timers.current.push(window.setTimeout(() => setTheme(next), 350));
    timers.current.push(window.setTimeout(() => setTransition(null), 820));
  };

  return (
    <>
      <button
        type="button"
        className={`theme-lighthouse ${light ? "theme-lighthouse--lit" : ""}`}
        onClick={toggleTheme}
        aria-label={light ? "Switch lighthouse off and use dark theme" : "Switch lighthouse on and use light theme"}
        aria-pressed={light}
        title={light ? "Switch beacon off" : "Switch beacon on"}
      >
        <span className="theme-lighthouse__beam" aria-hidden />
        <span className="theme-lighthouse__lantern" aria-hidden>
          <span className="theme-lighthouse__lamp" />
        </span>
        <span className="theme-lighthouse__roof" aria-hidden />
        <span className="theme-lighthouse__rail" aria-hidden />
        <span className="theme-lighthouse__tower" aria-hidden />
        <span className="theme-lighthouse__base" aria-hidden />
      </button>

      {transition ? (
        <span
          className={`theme-transition theme-transition--${transition}`}
          aria-hidden
        />
      ) : null}
    </>
  );
}
