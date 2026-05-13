import { useRef } from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import emailjs from "@emailjs/browser";
import Reveal from "../Reveal";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rpk1vza", "template_j96v9ga", form.current, {
        publicKey: "c6bSvm0S3KWLSzO0P",
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("I got your Email. Thanks!");
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="border-b border-white/[0.06]">
      <div className="dn-container py-20 md:py-28 lg:py-32">
        <Reveal>
          <header className="max-w-3xl">
            <h1 className="dn-section-title">Get in touch</h1>
            <div className="dn-accent-bar" />
          </header>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <Reveal className="lg:col-span-5" delay={60}>
            <div>
              <h2 className="font-mono text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Let’s Talk
              </h2>
              <p className="mt-8 text-base leading-relaxed text-slate-400 md:text-lg">
                I’d love to hear from you! Whether you want to discuss an idea,
                collaborate on a project, or just connect, feel free to reach out
                anytime.
              </p>
              <ul className="mt-12 space-y-8">
                <li className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <img src={mail_icon} alt="" className="h-6 w-6 opacity-90 invert" />
                  </div>
                  <p className="pt-2 font-mono text-sm text-slate-300 md:text-base">
                    daniyal.namdar@gmail.com
                  </p>
                </li>
                <li className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <img src={location_icon} alt="" className="h-6 w-6 opacity-90 invert" />
                  </div>
                  <p className="pt-2 font-mono text-sm text-slate-300 md:text-base">
                    Ankara, Turkey{" "}
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <form ref={form} className="dn-card p-8 md:p-10" onSubmit={sendEmail}>
              <label
                htmlFor="contact-name"
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                name="name"
                className="mt-3 w-full rounded-xl border border-white/[0.08] bg-void/70 px-4 py-3.5 font-mono text-sm text-slate-200 placeholder:text-slate-600 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
              />

              <label
                htmlFor="contact-email"
                className="mt-8 block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500"
              >
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                name="email"
                className="mt-3 w-full rounded-xl border border-white/[0.08] bg-void/70 px-4 py-3.5 font-mono text-sm text-slate-200 placeholder:text-slate-600 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
              />

              <label
                htmlFor="contact-message"
                className="mt-8 block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500"
              >
                Write your message here
              </label>
              <textarea
                id="contact-message"
                placeholder="Enter your message"
                name="message"
                rows={8}
                className="mt-3 w-full resize-y rounded-xl border border-white/[0.08] bg-void/70 px-4 py-3.5 font-mono text-sm text-slate-200 placeholder:text-slate-600 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
              />

              <button
                type="submit"
                className="mt-10 w-full rounded-xl bg-accent py-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-void transition-colors hover:bg-accent-bright sm:w-auto sm:px-12"
              >
                Submit now
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
