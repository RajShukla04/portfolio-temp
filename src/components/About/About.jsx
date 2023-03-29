import React from "react";
import "./About.css";
import AboutInfo from "./AboutInfo";
const About = () => {
  return (
    <div className="About" id="about">
      <div className="container">
        <h1 className="containerh1">About</h1>
        <p className="containerp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. <br /> Excepteur sint occaecat cupidatat non proident
        </p>
        <div className="info">
          <AboutInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
