import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/test_profile.png";
import CV from "../../assets/CV.pdf";
import Reveal from "../Reveal";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_-10%,rgba(192,132,252,0.12),transparent)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_12%_55%,rgba(34,211,238,0.09),transparent)]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 top-[28%] w-[2px] bg-gradient-to-b from-transparent via-accent/60 to-spark-purple/30 opacity-80 md:top-[20%]" aria-hidden />

      <div className="dn-container py-20 md:py-28 lg:py-36">
        <div className="dn-hero-split gap-y-14 md:grid md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="max-w-xl md:max-w-none">
            <Reveal delay={0}>
              <h1
                id="hero-heading"
                className="text-balance font-mono text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.12] tracking-tight text-white"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Daniyal Namdar
                </span>
              </h1>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-6 text-lg font-medium text-slate-300 md:mt-8 md:text-xl">
                Backend Developer based in Turkey
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 text-base leading-relaxed text-slate-400 md:text-lg">
                Welcome to my personal website! I&apos;m an ambitious software
                developer with a Master&apos;s degree in Electrical and Electronic
                Engineering.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-10 flex flex-wrap gap-4">
                <AnchorLink
                  offset={72}
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-void shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_16px_48px_-12px_rgba(34,211,238,0.5)]"
                >
                  Connect with Me
                </AnchorLink>
                <a
                  href={CV}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-slate-100 transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  My Resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/30 via-spark-purple/10 to-warmth/5 opacity-95 blur-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-navy-900/60 shadow-[0_40px_120px_-48px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.06]">
                <div className="absolute inset-0 bg-gradient-to-tr from-void/90 via-transparent to-transparent" aria-hidden />
                <img
                  src={profile_img}
                  alt="Profile"
                  width={480}
                  height={600}
                  className="aspect-[4/5] w-full object-cover"
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
