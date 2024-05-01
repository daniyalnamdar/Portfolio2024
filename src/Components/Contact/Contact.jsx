import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            i am here to talk i am here to talk i am here to talk i am here to
            talk i am here{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>daniyal.namdar@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>d009294399494</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Ankara, Turkey </p>
            </div>
          </div>
        </div>
        <form className="contact-right" ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            placeholder="Enter your message"
            name="message"
            rows="8"
          ></textarea>
          <button type="submit" className="contact-submit" value="Send">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
