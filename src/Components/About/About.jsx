import profile_img from "../../assets/test_profile_tall.jpg";
import Reveal from "../Reveal";

const SKILL_ROWS = [
  { label: "PHP & Symfony", width: "90%" },
  { label: "PYTHON & DJANGO ", width: "60%" },
  { label: " React & MYSQL", width: "80%" },
  { label: "HTML & CSS", width: "50%" },
];

function About() {
  return (
    <section
      id="about"
      className="relative border-b border-white/[0.06] bg-gradient-to-b from-panel/40 to-transparent"
      aria-labelledby="about-heading"
    >
      <div className="shell py-20 md:py-28 lg:py-32">
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

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="panel overflow-hidden rounded-2xl p-0 ring-1 ring-white/[0.05] transition hover:border-accent/25 hover:shadow-[0_24px_80px_-40px_rgba(46,230,168,0.18)]">
              <img
                src={profile_img}
                alt=""
                className="aspect-[3/4] w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="space-y-10 lg:col-span-7">
            <Reveal delay={120}>
              <div className="panel rounded-2xl p-8 ring-1 ring-white/[0.05] transition hover:border-white/[0.12] md:p-10">
                <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                  I believe in the dynamic nature of our world and the ever-evolving technology
                  landscape. To stay ahead of the curve, I consistently embrace the opportunity to
                  adapt and learn new things. As a backend developer, I have honed my skills in PHP,
                  particularly with the Symfony framework. Additionally, I am familiar with React,
                  HTML, CSS, Python, and the Django platform, allowing me to navigate various aspects
                  of web development.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="panel rounded-2xl p-8 ring-1 ring-white/[0.05] md:p-10">
                <div className="space-y-8">
                  {SKILL_ROWS.map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                        <span>{row.label}</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent via-signal to-accent-bright transition-[width] duration-1000 ease-out"
                          style={{ width: row.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-16 grid gap-8 rounded-2xl border border-white/[0.08] bg-panel/50 p-8 backdrop-blur-sm sm:grid-cols-3 sm:gap-4 md:p-12">
            <div className="text-center sm:border-r sm:border-white/[0.06] sm:pr-6">
              <p className="font-mono text-4xl font-semibold text-white md:text-5xl">3+</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="text-center sm:border-r sm:border-white/[0.06] sm:px-6">
              <p className="font-mono text-4xl font-semibold text-white md:text-5xl">2+</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Research and Teaching Assistance
              </p>
            </div>
            <div className="text-center sm:pl-6">
              <p className="font-mono text-4xl font-semibold text-white md:text-5xl">10+</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                COMPLETED PROJECTS
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
