import React, { useContext } from "react";
import "./work.css";
import Works from "./Works";
import { ThemeContext } from "../theme/ThemeContext";

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`work section ${theme}`} id="portfolio">
      <h2 className={`section__title ${theme}`}>Portfolio</h2>
      <span className={`section__subtitle ${theme}`}>My Projects</span>

      <Works />
    </section>
  );
};

export default Portfolio;
