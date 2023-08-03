import React from "react";
import "./about.css";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-suitcase-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 year on personal projects</span>
      </div>

      <div className="about__box">
        <i className="uil uil-award-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">7 projects</span>
      </div>

      <div className="about__box">
        <i className="uil uil-megaphone about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">online 16/7</span>
      </div>
    </div>
  );
};

export default Info;
