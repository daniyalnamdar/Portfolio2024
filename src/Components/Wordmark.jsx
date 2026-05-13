/* eslint-disable react/prop-types -- layout primitive */
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NAV_OFFSET } from "../constants/navigation";

export default function Wordmark({ onNavigate }) {
  return (
    <AnchorLink
      offset={NAV_OFFSET}
      href="#home"
      className="group flex items-center gap-2.5 outline-none sm:gap-3"
      onClick={onNavigate}
      aria-label="Daniyal Namdar — home"
    >
      <div className="relative grid h-11 w-11 place-items-center rounded-lg border border-accent/35 bg-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:-rotate-6 group-hover:border-accent/60 sm:h-12 sm:w-12">
        <span className="font-mono text-sm font-bold tracking-tighter text-accent sm:text-base">DN</span>
        <span className="pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#2ee6a8]" aria-hidden />
      </div>
      <div className="hidden leading-tight sm:block">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
          Namdar
        </span>
        <span className="mt-0.5 block font-mono text-[11px] text-slate-400">
          backend<span className="text-accent">/</span>systems
        </span>
      </div>
    </AnchorLink>
  );
}
