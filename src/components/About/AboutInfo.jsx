import React from "react";
import info from "../../assets/info.gif";
import phone from "../../assets/phone.gif";
import twitter from "../../assets/twitter.png";
import "./AboutInfo.css";
const AboutInfo = () => {
  return (
    <div className="aboutInfo">
      <div className="aboutInfo01">
        <img src={info} alt="NameIcon" className="nameIcon" />
        <h3>Full Name</h3>
        <p>Raj Shukla</p>
      </div>
      <div className="aboutInfo01">
        <img src={phone} alt="phoneIcon" className="phoneIcon" />
        <h3 className="emailh3">Email Address</h3>
        <p>rajshukla031@proton.me</p>
      </div>
      <div className="aboutInfo01">
        <img src={twitter} alt="twitterIcon" className="twitterIcon" />
        <h3>Twitter</h3>
        <a href="twitter.com" target={"_blank"}>
          I'm Not active on Twitter
        </a>
      </div>
    </div>
  );
};

export default AboutInfo;
