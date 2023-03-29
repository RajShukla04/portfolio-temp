import React from "react";
import "./Work.css";
import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
const Work = () => {
  return (
    <div className="Work">
      <div className="workcont">
        <h2 className="whatIDo">What i do</h2>
        <div className="works">
          <div className="software">
            <img src={vector} alt="software development" />
            <h3 className="worksh3">
              Software <br /> Development
            </h3>
          </div>
          <div className="dev">
            <img src={vector1} alt="Web development" />
            <h3 className="worksh3">
              Web <br /> Development
            </h3>
          </div>
          <div className="design">
            <img src={vector2} alt="Web Design" />
            <h3 className="worksh3">
              Web <br /> Design
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
