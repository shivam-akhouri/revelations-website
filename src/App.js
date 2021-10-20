import "./App.css";

import Faq from "./components/FAQ";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";

// components
import Banner from "./components/Banner";

function App() {
  return (
    <div style={{ backgroundColor: "#0E0221"}}>
      {/* <HomePage /> */}
      <div>
        <Banner />
        <div class="timeline-header-box">
          <h5 className="timeline-headers">Schedule</h5>
          <TimeLine />
        </div>
        <div class="text-center p-4 border-t-2 border-gray-300 mt-12 lg:mx-32 md:mx-5 sm:mx-10">
          <h5 className="timeline-headers">Sponsors & partners</h5>
        </div>
         <div class="text-center p-4 border-t-2 border-gray-300 mt-12 lg:mx-32 md:mx-5 sm:mx-10">
           <h5 className="timeline-headers">FAQ</h5>
         </div>
         <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
