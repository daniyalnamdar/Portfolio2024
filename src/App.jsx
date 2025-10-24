import React from "react";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-FLC67HHHPJ");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
