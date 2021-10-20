import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Sunset from "../../images/parallax-background/sunset.png";

import "./index.css";

import TimeLine from "../TimeLine";
import Faq from "../FAQ";
import Footer from "../Footer";

function HomePage() {
  return (
    null
    // <Parallax pages={4} class="flex">
    //   <ParallaxLayer
    //     offset={0}
    //     speed={-0.2}
    //     style={{ backgroundColor: "#0E0221", display: "flex",}}
    //   >
    //     <img src={Sunset} alt="sunset" className="main-image" />
    //   </ParallaxLayer>
    //   <ParallaxLayer offset={0} speed={0.1} className="header-container">
    //     <h1 className="main-header">REVELATION</h1>
    //     <h5 className="sub-header">13th-14th November,2021</h5>
    //   </ParallaxLayer>
    //   <ParallaxLayer
    //     offset={1}
    //     factor={1.3}
    //     style={{ backgroundColor: "#0E0221", padding: "5%",height: 'auto'}}
    //     speed={0}
    //   >
    //     <div class="text-center">
    //       <h5 className="timeline-headers">Timeline</h5>
    //     </div>
    //     <TimeLine />
    //     <div class="text-center">
    //       <h5 className="timeline-headers">Timeline End</h5>
    //     </div>
    //   </ParallaxLayer>
    //   <ParallaxLayer
    //     offset={2.5}
    //     style={{ backgroundColor: "#0E0221", paddingTop: "5%",height: 'auto'}}
    //     speed={0}
    //   >
    //     <div class="text-center p-4 border-t-2 border-gray-300 mt-2 lg:mx-32 md:mx-5 sm:mx-10">
    //       <h5 className="main-header faq">Frequently Asked Questions</h5>
    //     </div>
    //     <Faq />
    //   </ParallaxLayer>
    //   <ParallaxLayer
    //     offset={3.5}
    //     style={{  paddingTop: "5%",height: 'auto'}}
    //   >
    //     <Footer />
    //   </ParallaxLayer>
    // </Parallax>
  );
}

export default HomePage;

/*<ParallaxLayer
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
*/
