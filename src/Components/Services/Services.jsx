import { useEffect, useState } from "react";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import Reveal from "../Reveal";

function Services() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  useEffect(() => {
    if (!modalVisible) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalVisible]);

  const openModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  return (
    <section id="services" className="border-b border-white/[0.06]">
      <div className="dn-container py-20 md:py-28 lg:py-32">
        <Reveal>
          <header className="max-w-3xl">
            <h1 className="dn-section-title">My Skills</h1>
            <div className="dn-accent-bar" />
          </header>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {Services_Data.map((service, index) => (
            <Reveal key={service.s_no} delay={index * 70}>
              <button
                type="button"
                onClick={() => openModal(service)}
                className="dn-card dn-card-hover group flex h-full w-full flex-col p-8 text-left md:p-9"
              >
                <span className="font-mono text-xs font-medium text-accent">{service.s_no}</span>
                <h2 className="mt-4 font-mono text-lg font-semibold tracking-tight text-white md:text-xl">
                  {service.s_name}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {truncateString(service.s_desc, 75)}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent/90 transition-colors group-hover:text-accent">
                  Read More
                  <img src={arrow_icon} alt="" className="h-3 w-3 opacity-80" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {modalVisible && selectedService ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-void/90 p-4 backdrop-blur-md sm:items-center"
          role="presentation"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/12 bg-navy-900 p-8 shadow-lift md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-medium text-accent">{selectedService.s_no}</p>
                <h2
                  id="skill-modal-title"
                  className="mt-2 font-mono text-xl font-semibold text-white"
                >
                  {selectedService.s_name}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-accent"
              >
                Close
              </button>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-slate-400">
              {selectedService.s_desc}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Services;
