import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Wordmark from "../Wordmark";
import { NAV_OFFSET } from "../../constants/navigation";

const LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Skills", href: "#services" },
  { id: "work", label: "Portfolio", href: "#work" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    /** Viewport Y (px from top) past which a section counts as “current”. */
    const line = NAV_OFFSET + 16;

    let ticking = false;
    const computeActive = () => {
      let current = LINKS[0].id;
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= line) current = id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        computeActive();
      });
    };

    computeActive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeDrawer();
    };

    const firstFocusable = drawerRef.current?.querySelector(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    document.addEventListener("keydown", onKeyDown);
    firstFocusable?.focus?.({ preventScroll: true });

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return undefined;

    const trapHandler = (e) => {
      if (e.key !== "Tab" || !drawerRef.current) return;

      const items = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", trapHandler);
    return () => document.removeEventListener("keydown", trapHandler);
  }, [drawerOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="pointer-events-none relative mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-10 lg:pt-6">
          <div className="pointer-events-auto flex items-center justify-between gap-3">
            <Wordmark
              onNavigate={() => {
                setActive("home");
                closeDrawer();
              }}
            />

            <nav
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%-0.25rem)] lg:block"
              aria-label="Primary"
            >
              <div className="flex items-center gap-1 rounded-xl border border-white/[0.07] bg-panel/90 px-2 py-1.5 shadow-dock backdrop-blur-xl">
                {LINKS.map(({ id, label, href }) => (
                  <AnchorLink
                    key={id}
                    offset={NAV_OFFSET}
                    href={href}
                    className={`dock-link ${active === id ? "dock-link-active" : ""}`}
                    onClick={() => setActive(id)}
                  >
                    {label}
                  </AnchorLink>
                ))}
              </div>
            </nav>

            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <AnchorLink
                offset={NAV_OFFSET}
                href="#contact"
                className="rounded-full border border-accent/45 bg-accent/10 px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-void hover:shadow-[0_12px_40px_-12px_rgba(46,230,168,0.45)]"
                onClick={() => setActive("contact")}
              >
                Connect With Me
              </AnchorLink>
            </div>

            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.08] bg-panel/90 px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 backdrop-blur-xl transition hover:border-accent/40 hover:text-accent lg:hidden"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`fixed inset-0 z-[80] lg:hidden ${drawerOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          tabIndex={drawerOpen ? 0 : -1}
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={closeDrawer}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(22rem,92vw)] flex-col border-l border-white/[0.06] bg-void shadow-[-24px_0_80px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
              Navigate
            </span>
            <button
              type="button"
              tabIndex={drawerOpen ? 0 : -1}
              className="rounded-lg border border-white/[0.08] bg-ink px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 transition hover:border-accent/40 hover:text-accent"
              onClick={closeDrawer}
            >
              Close
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-3 py-5" aria-label="Mobile primary">
            {LINKS.map(({ id, label, href }) => (
              <AnchorLink
                key={id}
                offset={NAV_OFFSET}
                href={href}
                className={`rounded-lg px-4 py-3 font-display text-lg font-semibold transition hover:bg-white/[0.05] hover:text-accent ${
                  active === id ? "text-accent" : "text-slate-300"
                }`}
                onClick={() => {
                  setActive(id);
                  closeDrawer();
                }}
              >
                {label}
              </AnchorLink>
            ))}
          </nav>

          <div className="border-t border-white/[0.06] px-5 py-5">
            <AnchorLink
              offset={NAV_OFFSET}
              href="#contact"
              className="block w-full rounded-lg border border-accent/40 bg-accent/10 py-3.5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent"
              onClick={() => {
                setActive("contact");
                closeDrawer();
              }}
            >
              Connect With Me
            </AnchorLink>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
