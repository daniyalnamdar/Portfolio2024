import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AmbientCursor from "./Components/AmbientCursor";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-FLC67HHHPJ");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="relative min-h-screen bg-void">
      <AmbientCursor />
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[20001] whitespace-nowrap rounded-sm bg-accent px-4 py-2 font-mono text-sm text-void outline-none ring-2 ring-accent ring-offset-2 ring-offset-void focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="scroll-mt-28 pt-[5.25rem] lg:scroll-mt-32 lg:pt-28">
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
