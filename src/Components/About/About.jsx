import Reveal from "../Reveal";

const EXPERTISE = [
  {
    label: "Backend architecture",
    detail: "APIs, data models, access control, async workflows, and integrations.",
  },
  {
    label: "Cloud delivery",
    detail: "AWS, Oracle Cloud, Docker, Nginx, secure storage, and deployment.",
  },
  {
    label: "Production quality",
    detail: "Automated testing, performance tuning, observability, and maintainable code.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative border-b border-white/[0.06] bg-gradient-to-b from-panel/40 to-transparent"
      aria-labelledby="about-heading"
    >
      <div className="shell py-14 md:py-18 lg:py-20">
        <Reveal>
          <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-600">
                02 — profile
              </p>
              <h2 id="about-heading" className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
                About me
              </h2>
            </div>
            <div className="h-px w-full max-w-md bg-gradient-to-r from-accent via-signal/60 to-transparent lg:mb-3" />
          </header>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-6">
            <Reveal delay={120} className="lg:col-span-7">
              <div className="panel h-full rounded-2xl p-7 ring-1 ring-white/[0.05] transition hover:border-white/[0.12] md:p-8">
                <div className="space-y-4 text-sm leading-relaxed text-slate-400 md:text-base">
                  <p>
                    I&apos;m a backend engineer based in Ankara, focused on reliable PHP and Symfony
                    systems that solve real product problems. At BK Mobil, I&apos;ve owned backend
                    engineering across SaaS and EdTech products serving more than 13,000 users.
                  </p>
                  <p>
                    My work covers the full delivery path: architecture, APIs, databases, cloud
                    infrastructure, authentication, payments, asynchronous processing, automated
                    testing, and deployment. I&apos;m most useful where a product needs both hands-on
                    implementation and sound technical decisions.
                  </p>
                  <p>
                    Before software engineering, I completed an M.Sc. in Electrical and Electronics
                    Engineering at Bilkent University and published research in control systems. That
                    background still shapes how I break down complex systems and validate solutions.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-6 lg:col-span-5 lg:mt-0">
              <div className="panel h-full rounded-2xl p-7 ring-1 ring-white/[0.05] md:p-8">
                <div className="space-y-5">
                  {EXPERTISE.map((item, index) => (
                    <div key={item.label} className="grid gap-2 border-b border-white/[0.06] pb-5 last:border-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-4">
                      <span className="font-mono text-xs font-semibold text-accent">0{index + 1}</span>
                      <div>
                        <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">
                          {item.label}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-8 grid gap-6 rounded-2xl border border-white/[0.08] bg-panel/50 p-6 backdrop-blur-sm sm:grid-cols-3 sm:gap-4 md:p-8">
            <div className="text-center sm:border-r sm:border-white/[0.06] sm:pr-6">
              <p className="font-mono text-3xl font-semibold text-white md:text-4xl">13K+</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                USERS ACROSS PRODUCTS
              </p>
            </div>
            <div className="text-center sm:border-r sm:border-white/[0.06] sm:px-6">
              <p className="font-mono text-3xl font-semibold text-white md:text-4xl">&lt;1m</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                LARGE-FILE PROCESSING
              </p>
            </div>
            <div className="text-center sm:pl-6">
              <p className="font-mono text-3xl font-semibold text-white md:text-4xl">100+</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                AUTOMATED TESTS
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
