import React from "react";
import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
import profile_img from "../../assets/test_profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../../assets/CV.pdf";
import ME2 from "../../assets/ME2.png";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Daniyal Namdar,</span> Backend developer based in Turkey.
      </h1>
      <p>
        Welcome to my personal website! I'm an ambitious software developer with
        a Master's degree in Electrical and Electronic Engineering.
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
