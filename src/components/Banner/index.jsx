import React from "react";
import { FaDiscord } from "react-icons/fa";
import StarfieldAnimation from "react-starfield-animation";
import "../../App.css";

export default function Banner() {

  return (
    <div>
      <StarfieldAnimation
        numParticles="1000"
        style={{
          position: "absolute",
          width: "100%",
        }}
        className="particles"
      />
      <div className="banner-text-container">

        <h6 className="sub-header">12th-14th November, 2021</h6>
        <h1 className="main-header">REVELATION</h1>
        <h4 className="sub-header sub-heading">Let's make online fun!</h4>
        
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
