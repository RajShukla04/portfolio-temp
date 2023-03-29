import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="cent">
        <div className="head">
          <h1>Raj-Shukla</h1>
          <div className="nav">
            <ul>
              <li>
                <a href="/Aboutme">About Me</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/Contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
