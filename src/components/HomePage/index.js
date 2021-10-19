import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import moon from "../../images/parallax-background/moon.png";
import sky from "../../images/parallax-background/sky.png";
import mountain from "../../images/parallax-background/mountain.png";
import forest from "../../images/parallax-background/forest.png";
import castle from "../../images/parallax-background/castle.png";

import "./index.css";

import Footer from '../footer';
import FAQ from "../faq";
import Faq from "../faq";

function HomePage() {
  //   const parallax = useRef < IParallax > null;
  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{ backgroundColor: "#d4418e",
          backgroundImage: `url(${sky})`, backgroundRepeat: "no-repeat"
        }}
        />
        <ParallaxLayer
          speed={-0.5}
          style={{ height: "", display: "block", pointerEvents: "none" }}
        >
          <img src={moon} alt="moon" id="moon"/>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.4}
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
          <h1 style={{color: "blue", fontSize: "12vw", opacity: "0.6" }}>REVELATION</h1>
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
        <ParallaxLayer
          offset={1}
          speed={0.4}
          style={{ height: "", display: "block" }}
        >
          <Faq />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.4}
          style={{ height: "", display: "block", pointerEvents: "none" }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default HomePage;
