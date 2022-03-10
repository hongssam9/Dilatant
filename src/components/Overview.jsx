import React from "react";
import before from "./images/before.mp4";
import after from "./images/after.mp4";
import imp from "./images/ph-imp.png";
import imp1 from "./images/imp1.png";
import imp2 from "./images/imp2.png";
import imp3 from "./images/imp3.png";
import imp4 from "./images/imp4.png";

import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview-section" id="overview"> {/* Row */}
      <span><strong>Overview</strong></span>
      
      <div className="container" id="video">{/* Column */}
        <video controls loop autoPlay muted className="videos" id="firstvid">
          <source src={before} type="video/mp4"></source>
          Your browser does not support the video tag
        </video>
        <video controls loop autoPlay muted className="videos">
          <source src={after} type="video/mp4"></source>
          Your browser does not support the video tag
        </video>
        <p className="video-summary">
          Initial concepts of the Decelerate Straps have gone through testing
          has been performed by the US Army Research Laboratory in conjunction
          with the Air Force Research Laboratory. A test dummy strapped to a
          pilot seat and wearing a helmet configured with the straps was
          subjected to a 15g impulse load.{" "}
        </p>
      </div>
      <div className="container">
        <div id="ph-title"><strong>Pilot Head Implementation</strong></div> 
        <div id="ph-container">
          <img src={imp} className="ph-imp" alt="ph-imp" />
        </div>
        <div id="imp-container">
        <img src={imp1} className="imp" alt="imp" />
        <img src={imp2} className="imp" alt="imp" />
        <img src={imp3} className="imp" alt="imp" />
        <img src={imp4} className="imp" alt="imp" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
