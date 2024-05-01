import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            {" "}
            I am so cool yaa I am so cool yaaI am so cool yaaI am so cool yaa{" "}
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; DANIYAL Website, All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <a href="https://www.linkedin.com/in/daniyal-namdar/" target="_blank">
            <BsLinkedin size={40} color="white" />
          </a>
          <a href="https://github.com/daniyalnamdar" target="_blank">
            <FaGithub size={40} color="white" />
          </a>
          <a href="http://www.daniyalnamdar.com/" target="_blank">
            <FiDribbble size={40} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
