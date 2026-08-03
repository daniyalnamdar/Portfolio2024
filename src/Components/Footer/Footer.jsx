import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink/95">
      <div className="shell flex flex-col items-center justify-between gap-10 py-14 md:flex-row">
        <p className="max-w-md text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-slate-500 md:text-left">
          &copy; {new Date().getFullYear()} Daniyal Namdar. Backend systems built with care.
        </p>
        <div className="flex items-center gap-8 md:gap-10">
          <a
            href="https://www.linkedin.com/in/daniyal-namdar/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-transparent p-2 text-slate-400 transition-all hover:border-white/10 hover:text-accent"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={34} />
          </a>
          <a
            href="https://github.com/daniyalnamdar"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-transparent p-2 text-slate-400 transition-all hover:border-white/10 hover:text-accent"
            aria-label="GitHub"
          >
            <FaGithub size={34} />
          </a>
          <a
            href="https://www.daniyalnamdar.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-transparent p-2 text-slate-400 transition-all hover:border-white/10 hover:text-accent"
            aria-label="Portfolio site"
          >
            <FiGlobe size={34} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
