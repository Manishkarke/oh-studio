import React from "react";
import "./Header.css";
import Icon from "../../assets/Icon";

function Hero() {
  return (
    <>
      <header className="header container">
        <section className="hero-section">
          <div className="hero-title-container">
            <h1 className="hero-title">
              a brand and product designer working with clients globally
            </h1>
          </div>
          <div className="hero-tags-container">
            <p className="hero-tag">expertise</p>
            <p className="hero-tag">branding</p>
            <p className="hero-tag">product</p>
            <p className="hero-tag">design systems</p>
          </div>
        </section>

        <button className="btn sticky">
          <Icon /> 
          <span>shop</span>
        </button>
      </header>
    </>
  );
}

export default Hero;
