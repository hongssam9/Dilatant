import React from "react";
import "./About.css";
import example from "./images/example.png";
import rats from "./images/RATs.png";

const About = () => {
  return (
    <div className="about-section" id="about">
      {" "}
      {/* Row */}
      <div id="about-title">
        <strong>About</strong>
      </div>
      <div className="about-summary" id="summary1">
        {/* Column */}
        <p>
        Dilatant LLC, a privately held company located out of Kansas City,
        Missouri, aimed to provide a new level of pilot head safety and
        protection by incorporating Dilatant's rate attenuating Decelerate
        Straps into aviation helmets to help reduce violent head and body motion
        which may occur during acceleration, impact, or ejection, reducing
        potential trauma to the head. A team of six from the University of
        Kansas was responsible for redesigning a safety component in US Air
        Force helmets. Using SolidWorks and MSC Patran/Nastran, research was
        done to redesign the retrofit plate on the back of the helmet that
        doesn't restrict the pilot's lateral head movement.
        </p>
        <div>
          <img src={rats} className="rats" alt="rats" />
        </div>
      </div>
      <div className="about-summary" id="summary2">
        {" "}
        {/* Column */}
        <img src={example} className="example" alt="example" />
        <p>
        The Rate Activated Tether (RAT) Straps attached to the plate incorporate
        Shear Thickening Fluid (STF) which is a Non-Newtonian fluid where the
        shear viscosity increases with applied shear stress. The straps are able
        to stretch easily at low speeds but resist stretching at high speeds.
        They are well suited for reducing head movement caused by rapid and
        sudden motion.
        </p>
      </div>
    </div>
  );
};

export default About;
