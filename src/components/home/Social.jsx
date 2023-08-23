import React from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";

const Social = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/mrselassie/"
        className={`home__social-icon ${theme}`}
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/MrSelassie"
        className={`home__social-icon ${theme}`}
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Mreselassie001"
        className={`home__social-icon ${theme}`}
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};
export default Social;
