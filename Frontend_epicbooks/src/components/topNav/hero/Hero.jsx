import React from "react";
import logo from '../../../../assets/logo.png';
import './hero.css'
const Hero = () => {
  return (
    <div>
      <div className="container-logo">
        <img className="imgHero" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
