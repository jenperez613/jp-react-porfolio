import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aw62ada",
        "template_6awf8ms",
        formRef.current,
        "FzVn7y_EW66tXO-jT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/svg/phone.svg"
                alt=""
                className="c-icon"
              />{" "}
              +1 404.555.5555
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/svg/envelope-square.svg"
                alt=""
              />
              jen@jenperez.dev
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/svg/safari.svg"
                alt=""
              />
              700 Ponce De Leon Ave. Atlanta, Ga
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story? </b>
            Get in touch. Always available for freelancing if the right project
            comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
      <footer className="footer">
        <div class="footer-text">
          <p>
            Made with
            <FontAwesomeIcon icon="fa-solid faHeart" /> by
            <a href="https://jenperez.dev">Jen Perez</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. ©
            2022
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
