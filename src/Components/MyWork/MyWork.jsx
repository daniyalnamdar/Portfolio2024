import { useEffect, useState } from "react";
import mywork_data from "../../assets/mywork_data";
import arrow_icone from "../../assets/arrow_icon.svg";
import ReactGA from "react-ga4";
import Reveal from "../Reveal";

function excerpt(text, max = 220) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
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
    <section id="work" className="border-b border-white/[0.06] bg-navy-950/25">
      <div className="dn-container py-20 md:py-28 lg:py-32">
        <Reveal>
          <header className="max-w-3xl">
            <h1 className="dn-section-title">My Latest Work</h1>
            <div className="dn-accent-bar" />
          </header>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {mywork_data.map((work, index) => (
            <Reveal key={work.w_no} delay={index * 80}>
              <article className="dn-card dn-card-hover group overflow-hidden p-0">
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900/90 to-void p-3 sm:p-5">
                  <img
                    src={work.w_img}
                    alt={work.w_name}
                    className="max-h-full max-w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/35 to-transparent opacity-85" />
                  <div className="pointer-events-none absolute inset-0 bg-void/0 transition-colors duration-300 group-hover:bg-void/45 md:group-hover:bg-void/55" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-6 md:p-8">
                    <h3 className="text-balance font-mono text-base font-semibold leading-snug text-white md:text-lg">
                      {work.w_name}
                    </h3>
                  </div>

                  <div className="pointer-events-none absolute inset-0 z-[3] hidden flex-col justify-end bg-gradient-to-t from-void via-void/97 to-void/40 p-8 opacity-0 transition-opacity duration-300 md:flex md:group-hover:pointer-events-auto md:group-hover:opacity-100">
                    <p className="max-h-[44%] overflow-y-auto text-sm leading-relaxed text-slate-100">
                      {excerpt(work.w_desc)}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={work.w_github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-white/25 bg-white/[0.06] px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                      {demoOk(work) ? (
                        <a
                          href={work.w_demo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-white/25 bg-white/[0.06] px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Demo
                        </a>
                      ) : (
                        <span className="rounded-lg border border-white/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
                          Demo
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="absolute inset-0 z-[1] md:z-[2] md:group-hover:z-[1] md:group-hover:pointer-events-none"
                    onClick={() => openModal(work)}
                    aria-label={`Open project: ${work.w_name}`}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

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
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/12 bg-navy-900 p-8 shadow-lift md:p-10"
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
            <p className="mt-8 text-sm leading-relaxed text-slate-400">
              {selectedWork.w_desc}
            </p>
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
