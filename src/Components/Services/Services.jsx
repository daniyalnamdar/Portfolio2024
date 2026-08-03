import Services_Data from "../../assets/services_data";
import Reveal from "../Reveal";

function Services() {
  return (
    <section id="services" className="border-b border-white/[0.06]">
      <div className="shell py-14 md:py-18 lg:py-20">
        <Reveal>
          <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-600">
                03 — capabilities
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Core Capabilities
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
                The engineering areas I use to take backend products from first decisions to
                dependable production systems.
              </p>
            </div>
            <div className="h-px w-full max-w-md bg-gradient-to-r from-signal via-accent/70 to-transparent lg:mb-3" />
          </header>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Services_Data.map((service, index) => (
            <Reveal key={service.s_no} delay={index * 55}>
              <article className="panel group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 ring-1 ring-white/[0.05] transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_70px_-44px_rgba(46,230,168,0.45)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs font-semibold text-accent">{service.s_no}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/50 transition group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(46,230,168,0.8)]" />
                </div>
                <h3 className="mt-4 font-mono text-base font-semibold tracking-tight text-white md:text-lg">
                  {service.s_name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {service.s_proof}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4">
                  {service.s_tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-slate-500"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
