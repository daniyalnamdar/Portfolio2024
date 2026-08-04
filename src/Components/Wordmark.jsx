/* eslint-disable react/prop-types -- layout primitive */
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NAV_OFFSET } from "../constants/navigation";
import DNMark from "./DNMark";

export default function Wordmark({ onNavigate }) {
  return (
    <AnchorLink
      offset={NAV_OFFSET}
      href="#home"
      className="group flex items-center gap-2.5 outline-none sm:gap-3"
      onClick={onNavigate}
      aria-label="Daniyal Namdar — home"
    >
      <div className="relative flex h-11 w-[4.4rem] items-center sm:h-12 sm:w-[4.8rem]">
        <DNMark
          className="w-full text-slate-100 transition duration-300 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_8px_12px_rgba(46,230,168,0.2)]"
          title="Daniyal Namdar"
        />
      </div>
      <div className="hidden leading-tight sm:block">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          Daniyal Namdar
        </span>
        <span className="mt-0.5 block font-mono text-[11px] text-slate-400">
          backend<span className="text-accent">/</span>systems
        </span>
      </div>
    </AnchorLink>
  );
}
