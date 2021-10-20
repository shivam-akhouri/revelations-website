import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaDoorOpen,FaMusic,FaBug,FaAndroid,FaTheaterMasks,FaCss3,FaGoogle,FaDoorClosed } from "react-icons/fa";

export default function TimeLine() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#e74c3c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #e74c3c" }}
          date="12th November, 2021"
          iconStyle={{ background: "#e74c3c", color: "#fff" }}
          icon={<FaDoorOpen />}
        >
          <h3 className="vertical-timeline-element-title">Opening Ceremony</h3>
          <h4 className="vertical-timeline-element-subtitle">7:00 PM - 7:45 PM</h4>
          <p>
            Open to All
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2ecc71", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2ecc71" }}
          date="12th November, 2021"
          iconStyle={{ background: "#2ecc71", color: "#fff" }}
          icon={<FaMusic />}
        >
          <h3 className="vertical-timeline-element-title">Comedy Club/Music Club Event</h3>
          <h4 className="vertical-timeline-element-subtitle">
            8:00 PM - 10:00 PM
          </h4>
          <p>
            Unpaid
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="13th November, 2021"
          iconStyle={{ background: "#34495e", color: "#fff" }}
          contentStyle={{ background: "#34495e", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #34495e" }}
          icon={<FaBug />}
        >
          <h3 className="vertical-timeline-element-title">ZBC Talk Show</h3>
          <h4 className="vertical-timeline-element-subtitle">
            10:00 AM -12:00 AM
          </h4>
          <p>Decision Pending</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="13th November, 2021"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaAndroid />}
        >
          <h3 className="vertical-timeline-element-title">Android Club Talk Show</h3>
          <h4 className="vertical-timeline-element-subtitle">
            2:00 PM - 4: 00 PM
          </h4>
          <p>Unpaid</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="13th November, 2021"
          contentStyle={{ background: "#2ecc71", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2ecc71" }}
          iconStyle={{ background: "#2ecc71", color: "#fff" }}
          icon={<FaTheaterMasks />}
        >
          <h3 className="vertical-timeline-element-title">
            Comedy Club/Music Club
          </h3>
          <h4 className="vertical-timeline-element-subtitle">5:30 PM - 7:00 PM</h4>
          <p>Decision Pending</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="13th November, 2021"
          iconStyle={{ background: "#214CE5", color: "#fff" }}
          contentStyle={{ background: "#214CE5", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #214CE5" }}
          icon={<FaCss3 />}
        >
          <h3 className="vertical-timeline-element-title">
            CSS Battles
          </h3>
          <h4 className="vertical-timeline-element-subtitle">8:00 PM - 10:00 PM</h4>
          <p>Paid</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="14th November, 2021"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaGoogle />}
        >
          <h3 className="vertical-timeline-element-title">
            Google Developers Club Talk Show
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            12:00 PM - 2:00 PM
          </h4>
          <p>Paid</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="14th November, 2021"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaAndroid />}
        >
          <h3 className="vertical-timeline-element-title">Android Club Talk Show</h3>
          <h4 className="vertical-timeline-element-subtitle">
            4:00 PM -
          </h4>
          <p>Unpaid</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="14th November, 2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          icon={<FaDoorClosed />}
        >
          <h3 className="vertical-timeline-element-title">
            Closing Ceremony
          </h3>
          <h4 className="vertical-timeline-element-subtitle">6:00 PM - 8:00 PM</h4>
          <p>Open to all</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}