import { useContext } from "react";
import "./scrollup.css";
import { ThemeContext } from "../theme/ThemeContext";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    //When the scroll is higher than 650 viewport Height add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  const { theme } = useContext(ThemeContext);

  return (
    <a href="#home" className={`scrollup ${theme}`}>
      <i className={`uil uil-arrow-up scrollup__icon ${theme}`}></i>
    </a>
  );
};

export default ScrollUp;
