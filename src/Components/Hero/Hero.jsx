import React from "react";
import "./Hero.css";
import profile_img from "../../assets/test_profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../../assets/CV.pdf";

function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Daniyal Namdar</span>
        </h1>
        <h2>Backend Developer based in Turkey</h2>
        <p>
          Welcome to my personal website! I'm an ambitious software developer
          with a Master's degree in Electrical and Electronic Engineering.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with Me
            </AnchorLink>
          </div>
          <div className="hero-resume">
            <a href={CV} target="_blank" rel="noreferrer">
              My Resume
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-wrapper">
          <img src={profile_img} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
