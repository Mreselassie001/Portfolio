import React, { useState, useContext, useEffect } from "react";
import Frontend from "./Frontend";
import "./skills.css";
// import Backend from "./Backend";
import { ThemeContext } from "../theme/ThemeContext";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  // const [ setToggleState] = useState(0);
  const [userTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "day";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", userTheme);
    localStorage.setItem("theme", userTheme);
  }, [userTheme]);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  return (
    <section className={`skills section ${theme}`} id="skills">
      <h2 className={`section__title ${theme}`}>Skills</h2>
      <span className={`section__subtitle ${theme}`}>My Level</span>

      <div className="skills__container container grid">
        <Frontend />
        {/* <Backend /> */}
      </div>
    </section>
  );
};

export default Skills;
