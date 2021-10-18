import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import moon from "../../images/parallax-background/moon.png";
import sky from "../../images/parallax-background/sky.png";
import mountain from "../../images/parallax-background/mountain.png";
import forest from "../../images/parallax-background/forest.png";
import castle from "../../images/parallax-background/castle.png";
function HomePage() {
  //   const parallax = useRef < IParallax > null;
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.4}
          style={{ height: "", display: "block", pointerEvents: "none" }}
        >
          <img src={sky} alt="moon" />
        </ParallaxLayer>
        <ParallaxLayer
          speed={-0.5}
          style={{ height: "", display: "block", pointerEvents: "none" }}
        >
          <img src={moon} alt="moon" />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.6}
          style={{ height: "", display: "block", pointerEvents: "none" }}
        >
          <img src={mountain} alt="moon" />
        </ParallaxLayer>
        <ParallaxLayer
          speed={-0.6}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "white",
            textAlign: "center",
            display: "block",
            pointerEvents: "none",
            marginTop: "150px"
          }}
        >
          <h1 style={{color: "blue", fontSize: "150px", opacity: "0.3" }}>REVELATION</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.4}
          style={{ display: "block", pointerEvents: "none" }}
        >
          <img src={forest} alt="moon" />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.4}
          style={{ height: "", display: "block", pointerEvents: "none" }}
        >
          <img src={castle} alt="moon" />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default HomePage;
