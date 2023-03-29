import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="Skills">
      <div className="skill">
        <h4 className="mySkills">My Skills</h4>
        <div className="skillcard">
          <div className="cardContainer">
            <div className="cardContainer0">
              <h3 className="skillper">50%</h3>
              <p className="skillName">HTML</p>
            </div>
            <div className="cardContainer0">
              <h3 className="skillper">45%</h3>
              <p className="skillName">CSS</p>
            </div>
            <div className="cardContainer0">
              <h3 className="skillper">50%</h3>
              <p className="skillName">javaScript</p>
            </div>
            <div className="cardContainer0">
              <h3 className="skillper">70%</h3>
              <p className="skillName">REACT.JS</p>
            </div>
            <div className="cardContainer0">
              <h3 className="skillper">as need</h3>
              <p className="skillName">GIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
