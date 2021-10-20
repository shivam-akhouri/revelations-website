import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";

export default function TimeLine() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
          date="2008 - 2010"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaReact />}
        /> */}
      </VerticalTimeline>
    </>
  );
}


// import React, { useState } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import styles from "./styles.module.css";

// const Page = ({ offset, gradient, onClick }) => {
//   return (
//     <>
//       <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
//         <div className={styles.slopeBegin} />
//       </ParallaxLayer>

//       <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
//         <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
//       </ParallaxLayer>

//       <ParallaxLayer
//         className={`${styles.text} ${styles.number}`}
//         offset={offset}
//         speed={0.3}
//       >
//         <span>0{offset + 1}</span>
//       </ParallaxLayer>
//     </>
//   );
// };

// export default function TimeLine() {
//   const [step,setStep] = useState(0);

//   return (
//     <div style={{ background: "#dfdfdf" }}>
//       <Parallax className={styles.container} pages={3} horizontal>
//         <Page offset={0} gradient="pink" onClick={()=>setStep(1)}/>
//         <Page offset={1} gradient="teal" onClick={()=>setStep(2)}/>
//         <Page offset={2} gradient="tomato" onClick={()=>setStep(0)}/>
//       </Parallax>
//     </div>
//   );
// }