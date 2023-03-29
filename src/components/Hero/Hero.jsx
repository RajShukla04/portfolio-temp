import React from "react";
import Header from "../Header/Header";
import pic from '../../assets/pic.jpg'
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <Header />
      <div className="Hero">
        <div className="heroContent">
          <div className="left">
            <h1>
              Hi, I am <br />
              Raj Shukla
            </h1>
            <h3>Frontend Developer</h3>
            <div className="btn">
              <p className="btn1">
                <a href="">Contact</a>
              </p>
              <p className="btn1 col">
                <a href="#about">Learn More</a>
              </p>
            </div>
          </div>
          <div className="right">
            <img src={pic} alt="hero pic" className="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
