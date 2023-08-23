import React, { useState, useContext, useEffect } from "react";
import "./preloader.css";
import { ThemeContext } from "../theme/ThemeContext";

const PreLoader = () => {
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
  return (
    <div class="banter-loader">
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
    </div>
  );
};

export default PreLoader;
