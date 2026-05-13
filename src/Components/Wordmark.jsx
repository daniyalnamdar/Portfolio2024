/* eslint-disable react/prop-types -- layout primitive */
import AnchorLink from "react-anchor-link-smooth-scroll";

/**
 * Minimal SVG frame + monogram — replaces raster logo.
 */
export default function Wordmark({ onNavigate }) {
  return (
    <AnchorLink
      offset={72}
      href="#home"
      className="group flex items-center gap-3 outline-none"
      onClick={onNavigate}
      aria-label="Daniyal Namdar — home"
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-accent transition-[color,transform] duration-300 ease-out group-hover:scale-[1.02] group-hover:text-accent-bright"
        aria-hidden
      >
        <rect
          x="1"
          y="1"
          width="42"
          height="42"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.25"
          className="opacity-80 group-hover:opacity-100"
        />
        <text
          x="22"
          y="27"
          textAnchor="middle"
          fill="currentColor"
          className="font-mono text-[13px] font-medium tracking-tight"
          style={{ fontFamily: "JetBrains Mono, ui-monospace, monospace" }}
        >
          DN
        </text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-slate-500 transition-colors group-hover:text-slate-400">
          Daniyal
        </span>
        <span className="mt-1 font-mono text-base tracking-[0.06em] text-slate-100 transition-colors group-hover:text-white">
          Namdar
        </span>
      </div>
    </AnchorLink>
  );
}
