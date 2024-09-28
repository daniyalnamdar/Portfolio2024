import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";
import profile_img from "../../assets/test_profile_tall.jpg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I believe in the dynamic nature of our world and the ever-evolving
              technology landscape. To stay ahead of the curve, I consistently
              embrace the opportunity to adapt and learn new things. As a
              backend developer, I have honed my skills in PHP, particularly
              with the Symfony framework. Additionally, I am familiar with
              React, HTML, CSS, Python, and the Django platform, allowing me to
              navigate various aspects of web development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>PHP & Symfony</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>PYTHON & DJANGO </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p> React & MYSQL</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Research and Teaching Assistance</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>COMPLETED PROJECTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
