import React from "react";
import "./GetInTouch.css";
const GetInTouch = () => {
  return (
    <div className="form">
      <div className="formContent">
        <h2 className="getInTouchh2">Get in touch</h2>

        <div className="fromwrap">
          <div className="formcont">
            <input type="text" placeholder="Name" className="inputName" />
            <input type="text" placeholder="Last Name" className="inputName" />
          </div>
          <div className="mainInp">
            <input type="email" name="email" id="email" placeholder="Email" className="inputName" />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Phone Number"
              className="inputName"
            />
          </div>
        </div>
        <button type="submit" className="button-64"><span className="text">Submit now</span></button>
      </div>
    </div>
  );
};

export default GetInTouch;
