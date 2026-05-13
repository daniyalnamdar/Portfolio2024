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

function MyWork() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedWork(null);
  };

  useEffect(() => {
    if (!modalVisible) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalVisible]);

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
    if (!work.w_demo || work.w_demo === "empty") return;
    ReactGA.event({
      category: "Portfolio",
      action: "Clicked Demo Button",
      label: work.w_name,
    });
    window.open(work.w_demo, "_blank");
  };

  const demoOk = (work) => work.w_demo && work.w_demo !== "empty";

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
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-void/90 p-4 backdrop-blur-md sm:items-center"
          role="presentation"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/12 bg-panel p-8 shadow-lift md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3
                id="project-modal-title"
                className="text-balance font-mono text-xl font-semibold leading-snug text-white"
              >
                {selectedWork.w_name}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-accent"
              >
                Close
              </button>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-slate-400">{selectedWork.w_desc}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleGithubClick(selectedWork)}
                className="rounded-xl bg-accent px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-void transition-colors hover:bg-accent-bright"
              >
                GitHub
              </button>
              <button
                type="button"
                disabled={!demoOk(selectedWork)}
                onClick={() => handleDemoClick(selectedWork)}
                className={`rounded-xl border px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.15em] ${
                  demoOk(selectedWork)
                    ? "border-white/20 text-slate-200 hover:border-accent hover:text-accent"
                    : "cursor-not-allowed border-white/10 text-slate-600"
                }`}
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default MyWork;
