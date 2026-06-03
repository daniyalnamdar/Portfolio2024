import { useEffect, useState } from "react";
import mywork_data from "../../assets/mywork_data";
import arrow_icone from "../../assets/arrow_icon.svg";
import ReactGA from "react-ga4";
import Reveal from "../Reveal";

function excerpt(text, max = 220) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

function cardSummary(text, max = 132) {
  return excerpt(text, max);
}

function demoOk(work) {
  return work.w_demo && work.w_demo !== "empty";
}

/* eslint-disable react/prop-types -- modal receives typed work object from parent state */
function ProjectDetailModal({ work, onClose, onGithub, onDemo }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const hasDemo = demoOk(work);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-void/85 backdrop-blur-md motion-safe:animate-modal-backdrop-in"
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-white/[0.1] bg-panel shadow-lift motion-safe:animate-modal-panel-in sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero — ambient image shade + sharp preview */}
        <div className="relative shrink-0 overflow-hidden border-b border-white/[0.06]">
          <div className="relative aspect-[16/10] min-h-[200px] sm:min-h-[240px]">
            <img
              src={work.w_img}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full scale-[1.35] object-cover object-center opacity-[0.38] blur-2xl saturate-[1.15] motion-reduce:scale-100 motion-reduce:blur-none"
            />
            <img
              src={work.w_img}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full scale-125 object-cover object-center opacity-20 mix-blend-soft-light motion-reduce:hidden"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-void/70 via-panel/50 to-void/80"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,rgba(46,230,168,0.08),transparent)]"
              aria-hidden
            />

            <div className="absolute inset-0 flex items-center justify-center px-6 pb-14 pt-12 sm:px-10 sm:pb-16 sm:pt-14">
              <div className="relative w-full max-w-md rounded-xl border border-white/[0.12] bg-void/40 p-2.5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.08] backdrop-blur-sm sm:max-w-lg sm:p-3">
                <div className="overflow-hidden rounded-lg bg-gradient-to-br from-ink to-void">
                  <img
                    src={work.w_img}
                    alt={work.w_name}
                    className="mx-auto max-h-[min(220px,32vh)] w-full object-contain object-center sm:max-h-[min(260px,36vh)]"
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 px-5 py-4 sm:px-6">
              <span className="rounded-full border border-white/10 bg-void/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-md">
                #{String(work.w_no).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/10 bg-void/60 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 backdrop-blur-md transition hover:border-accent/40 hover:text-accent"
              >
                Close
              </button>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-panel via-panel/95 to-transparent px-5 pb-5 pt-16 sm:px-8 sm:pb-6">
              <h3
                id="project-modal-title"
                className="text-balance font-display text-xl font-semibold leading-snug text-white sm:text-2xl"
              >
                {work.w_name}
              </h3>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
          <p className="text-sm leading-relaxed text-slate-400 sm:text-[15px] sm:leading-7">
            {work.w_desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-7">
            <button
              type="button"
              onClick={() => onGithub(work)}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-void transition hover:bg-accent-bright"
            >
              GitHub
            </button>
            <button
              type="button"
              disabled={!hasDemo}
              onClick={() => onDemo(work)}
              className={`inline-flex items-center justify-center rounded-xl border px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] ${
                hasDemo
                  ? "border-white/20 text-slate-200 hover:border-accent hover:text-accent"
                  : "cursor-not-allowed border-white/10 text-slate-600"
              }`}
            >
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyWork() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedWork(null);
  };

  const openModal = (work) => {
    setSelectedWork(work);
    setModalVisible(true);
    ReactGA.event({
      category: "Portfolio",
      action: "Opened Project Modal",
      label: work.w_name,
    });
  };

  const handleGithubClick = (work) => {
    ReactGA.event({
      category: "Portfolio",
      action: "Clicked GitHub Button",
      label: work.w_name,
    });
    window.open(work.w_github, "_blank");
  };

  const handleDemoClick = (work) => {
    if (!demoOk(work)) return;
    ReactGA.event({
      category: "Portfolio",
      action: "Clicked Demo Button",
      label: work.w_name,
    });
    window.open(work.w_demo, "_blank");
  };

  return (
    <section id="work" className="border-b border-white/[0.06] bg-panel/25">
      <div className="shell py-20 md:py-28 lg:py-32">
        <Reveal>
          <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-600">
                04 — shipped
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
                My Latest Work
              </h2>
            </div>
            <div className="h-px w-full max-w-md bg-gradient-to-r from-accent/80 via-signal to-transparent lg:mb-3" />
          </header>
        </Reveal>

        <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {mywork_data.map((work, index) => (
            <Reveal key={work.w_no} delay={index * 70} as="li" className="min-w-0">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-panel/70 shadow-lift ring-1 ring-white/[0.04] transition hover:border-accent/25 hover:shadow-[0_28px_80px_-48px_rgba(46,230,168,0.2)]">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-void via-ink to-panel">
                  <img
                    src={work.w_img}
                    alt=""
                    className="absolute inset-0 m-auto max-h-[88%] max-w-[92%] object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(7,10,18,0.55)_0%,transparent_42%)]"
                    aria-hidden
                  />

                  <button
                    type="button"
                    className="absolute inset-0 z-[1] cursor-pointer border-0 bg-transparent p-0 text-left outline-none"
                    onClick={() => openModal(work)}
                    aria-label={`Open project details: ${work.w_name}`}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 border-t border-white/[0.06] p-5 md:p-6">
                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent/90">
                      #{String(work.w_no).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-balance font-mono text-base font-semibold leading-snug text-white md:text-lg">
                      {work.w_name}
                    </h3>
                  </div>

                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
                    {cardSummary(work.w_desc)}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    <a
                      href={work.w_github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-white/18 bg-white/[0.04] px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200 transition hover:border-accent/45 hover:text-accent"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                    {demoOk(work) ? (
                      <a
                        href={work.w_demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-white/18 bg-white/[0.04] px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200 transition hover:border-accent/45 hover:text-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-white/[0.06] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
                        Demo
                      </span>
                    )}
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg border border-accent/35 bg-accent/10 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent transition hover:bg-accent/20"
                      onClick={() => openModal(work)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-14 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
            <span>Show More</span>
            <img src={arrow_icone} alt="" className="h-3 w-3 opacity-60" />
          </div>
        </Reveal>
      </div>

      {modalVisible && selectedWork ? (
        <ProjectDetailModal
          work={selectedWork}
          onClose={closeModal}
          onGithub={handleGithubClick}
          onDemo={handleDemoClick}
        />
      ) : null}
    </section>
  );
}

export default MyWork;
