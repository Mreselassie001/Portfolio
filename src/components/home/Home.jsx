import React, {  useContext, useEffect } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const header = document.querySelector(".header");
    if (window.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  };

  return (
    <section className={`home section ${theme}`} id="home">
      <div className={`home__container container grid ${theme}`}>
        <div className={`home__content grid ${theme}`}>
          <Social />

          <div className={`home__img ${theme}`}></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
