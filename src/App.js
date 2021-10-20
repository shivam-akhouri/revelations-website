//import logo from './logo.svg';

import "./App.css";
import "./components/HomePage/index.css";

import Faq from "./components/FAQ";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";

// components
import HomePage from "./components/HomePage";

function App() {
  return (
    <div style={{ backgroundColor: "#0E0221"}}>
      {/* <HomePage /> */}
      <div>
        <div style={{ textAlign: "center" }}>
          <h5 className="timeline-headers">Schedule</h5>
        </div>
        <TimeLine />
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
