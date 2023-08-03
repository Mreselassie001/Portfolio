import React, { useState } from "react";
import { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../theme/ThemeContext"; // Update the import statement

// Rest of the code

const Header = () => {
  const { theme } = useContext(ThemeContext);

  /* ========== change background header ========== */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //When the scroll is higher than 200 viewport Height add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* ========== toggle Menu ========== */
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className={`header ${theme}`}>
      <nav className={`nav container ${theme}`}>
        <a href="index.html" className={`nav__logo ${theme}`}>
          Elikem
        </a>

        <div
          className={`${toggle ? "nav__menu show-menu" : "nav__menu"} ${theme}`}
        >
          <ul className={`nav__list  ${theme}`}>
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home"
                    ? `nav__link active-link ${theme}`
                    : `nav__link ${theme}`
                }
              >
                <i className={`uil uil-estate nav__icon ${theme}`}></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? `nav__link active-link ${theme}`
                    : `nav__link ${theme}`
                }
              >
                <i className={`uil uil-user nav__icon ${theme}`}></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? `nav__link active-link ${theme}`
                    : `nav__link ${theme}`
                }
              >
                <i className={`uil uil-file-alt nav__icon ${theme}`}></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? `nav__link active-link ${theme}`
                    : `nav__link ${theme}`
                }
              >
                <i className={`uil uil-briefcase-alt nav__icon ${theme}`}></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? `nav__link active-link ${theme}`
                    : `nav__link ${theme}`
                }
              >
                <i className={`uil uil-scenery nav__icon ${theme}`}></i>
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? `nav__link active-link ${theme}`
                    : `nav__link ${theme}`
                }
              >
                <i className={`uil uil-message nav__icon ${theme}`}></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className={`uil uil-times nav__close ${theme}`}
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div
          className={`nav__toggle ${theme}`}
          onClick={() => setToggle(!toggle)}
        >
          <i className={`uil uil-apps ${theme}`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
