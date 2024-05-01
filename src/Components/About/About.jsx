import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
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
              about me text i am so good about me text i am so good about me
              text i am so good about me text i am so good
            </p>
            <p>
              about me text i am so good about me text i am so good about me
              text i am so goodabout me text i am so good
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>PHP & CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>RECT & CSS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>PYTHON & CSS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY FRIENDS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
