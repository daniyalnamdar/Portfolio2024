import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/daniyal-professional.jpg";
import CV from "../../assets/CV.pdf";
import Reveal from "../Reveal";
import { NAV_OFFSET } from "../../constants/navigation";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_90%_0%,rgba(99,102,241,0.11),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_8%_45%,rgba(46,230,168,0.08),transparent)]"
        aria-hidden
      />

      <div className="shell pb-12 pt-4 md:pb-14 md:pt-6 lg:pb-14 lg:pt-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12">
          <Reveal delay={0}>
            <div className="panel overflow-hidden rounded-2xl ring-1 ring-white/[0.04]">
              <div
                className="flex items-center gap-2 border-b border-white/[0.08] bg-ink/90 px-4 py-2.5 md:px-5"
                aria-hidden
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500/75" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-amber-wire/90" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent/90 shadow-[0_0_10px_rgba(46,230,168,0.5)]" />
                <span className="ml-2 truncate font-mono text-[10px] text-slate-500 md:text-[11px]">
                  session — portfolio@v1
                </span>
              </div>

              <div className="space-y-4 p-6 font-mono text-sm leading-relaxed text-slate-400 md:p-8 md:text-[15px]">
                <p>
                  <span className="text-accent">➜</span>{" "}
                  <span className="text-signal">~</span>{" "}
                  <span className="text-slate-500">whoami</span>
                </p>

                <div className="space-y-4 border-l-2 border-accent/35 pl-5 font-sans">
                  <h1
                    id="hero-heading"
                    className="text-balance font-display text-[clamp(2rem,4.4vw,2.8rem)] font-semibold leading-[1.08] tracking-tight text-white"
                  >
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                      Daniyal Namdar
                    </span>
                  </h1>

                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent md:text-sm">
                    Backend Engineer · PHP · Symfony · AWS
                  </p>

                  <h2 className="max-w-2xl text-lg font-medium leading-snug text-slate-200 md:text-xl">
                    I build and scale the backend systems behind production SaaS and EdTech
                    platforms.
                  </h2>

                  <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                    Building production backends since 2021 — from API and database design through cloud
                    infrastructure, testing, and deployment — across platforms serving 13,000+
                    users.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">10K+ user platform</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">100+ automated tests</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">Architecture to deployment</span>
                  </div>
                </div>

                <p className="text-slate-600">
                  <span className="text-accent">➜</span>{" "}
                  <span className="text-signal">~</span>{" "}
                  <span className="text-slate-500">ls ./cta</span>
                </p>

                <div className="flex flex-wrap gap-3 pt-1 font-sans md:gap-4">
                  <AnchorLink
                    offset={NAV_OFFSET}
                    href="#work"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-void shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-accent-bright hover:shadow-[0_16px_48px_-12px_rgba(46,230,168,0.45)]"
                  >
                    View Case Studies
                  </AnchorLink>
                  <a
                    href={CV}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/18 bg-white/[0.03] px-7 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-100 transition hover:border-accent/45 hover:text-accent"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] lg:max-w-[360px]">
              <div
                className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-accent/25 via-signal/15 to-amber-wire/5 blur-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-ink/90 shadow-lift ring-1 ring-white/[0.05]">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-void/85 via-transparent to-signal/10"
                  aria-hidden
                />
                <img
                  src={profile_img}
                  alt="Daniyal Namdar, backend engineer"
                  width={1093}
                  height={1096}
                  className="aspect-square w-full object-cover"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
