import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Wordmark from "../Wordmark";

const LINKS = [
  { id: "home", label: "Home", href: "#home", offset: 72 },
  { id: "about", label: "About", href: "#about", offset: 72 },
  { id: "services", label: "Skills", href: "#services", offset: 72 },
  { id: "work", label: "Portfolio", href: "#work", offset: 72 },
  { id: "contact", label: "Contact", href: "#contact", offset: 72 },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-void/90 backdrop-blur-2xl">
        <div className="dn-container flex items-center justify-between gap-6 py-4 md:py-5">
          <Wordmark
            onNavigate={() => {
              setActive("home");
              close();
            }}
          />

          <nav className="dn-desktop-only" aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-8 lg:gap-10">
              {LINKS.map(({ id, label, href, offset }) => (
                <li key={id}>
                  <AnchorLink
                    offset={offset}
                    href={href}
                    className={`group relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                      active === id ? "text-accent" : "text-slate-400 hover:text-slate-200"
                    }`}
                    onClick={() => setActive(id)}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ease-out ${
                        active === id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-40"
                      }`}
                    />
                  </AnchorLink>
                </li>
              ))}
            </ul>
            <AnchorLink
              offset={72}
              href="#contact"
              className="rounded-xl border border-accent/50 bg-accent/[0.12] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent transition-all duration-300 hover:bg-accent hover:text-void hover:shadow-[0_12px_40px_-16px_rgba(34,211,238,0.5)]"
              onClick={() => setActive("contact")}
            >
              Connect With Me
            </AnchorLink>
          </nav>

          <button
            type="button"
            className="dn-mobile-only flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.03]"
            aria-expanded={open}
            aria-controls="dn-mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-5 bg-slate-200 transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-5 bg-slate-200 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-slate-200 transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <div
        id="dn-mobile-drawer"
        className={`dn-mobile-only fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-void/90 backdrop-blur-md transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col border-l border-white/[0.08] bg-navy-900 px-8 pb-10 pt-24 shadow-lift transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile"
        >
          {LINKS.map(({ id, label, href, offset }) => (
            <AnchorLink
              key={id}
              offset={offset}
              href={href}
              className="border-b border-white/[0.06] py-5 font-mono text-xs uppercase tracking-[0.22em] text-slate-300"
              onClick={() => {
                setActive(id);
                close();
              }}
            >
              {label}
            </AnchorLink>
          ))}
          <AnchorLink
            offset={72}
            href="#contact"
            className="mt-8 rounded-sm border border-accent bg-accent/15 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
            onClick={() => {
              setActive("contact");
              close();
            }}
          >
            Connect With Me
          </AnchorLink>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
