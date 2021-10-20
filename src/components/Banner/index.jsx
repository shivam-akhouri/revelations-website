import React from "react";
import { FaDiscord } from "react-icons/fa";
import StarfieldAnimation from "react-starfield-animation";
import "../../App.css";

export default function Banner() {
  return (
    <div>
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="banner-text-container">
        <h1 className="main-header">REVELATION</h1>
        <h5 className="sub-header">13th-14th November,2021</h5>
        <div className="button-container">
            <button className="apply-button">
                Register for Events
            </button>
            <button className="join-discord-button">
                Join Discord  <FaDiscord className="button-icon"/>
            </button>
        </div>
      </div>
    </div>
  );
}
