import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../../assets/CV.pdf";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Daniyal Namdar,</span> Backend developer based in Turkey.
      </h1>
      <p>
        I am backend developer from Ankara, with nearly three years experience
        with PHP and its framworks such as symfony and API Platform.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={CV} target="_blank">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
