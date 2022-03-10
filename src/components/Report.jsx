import React from "react";
import "./Report.css";
import prev_des from "./images/prev_des.png";
import final_sel from "./images/final_sel.png";
import print1 from "./images/print1.png";
import print2 from "./images/print2.png";

const Report = () => {
  return (
    <div className="report-section" id="report">
      <div id="report-title">
        <strong>Designs & Report</strong>
      </div>
      <div id="task">
        <strong>Problem Trying to Solve</strong> – Redesign the retrofit plate
        on the back of the helmet that doesn't restrict the pilots lateral head
        movement. <br />
        <strong> Problem with Current Design </strong>– The current design is a
        single fixed point which is ideal, but doesn't allow for maximum
        rotation of the head. Pilot’s need to free to look around all angles
        during flight. <br />
        <strong> Design Guidelines: </strong>
        <ul>
          <li>
            The design can’t cause issues with the performance of the Decelerate
            Strap during an ejection. Straps must be able to activate smoothly{" "}
          </li>
          <li>
            Full lateral rotation of the head (Side to Side). Utilize the
            current screw locations on the helmet to fix the plate to the back.
          </li>
          <li>
            Plate must be able to lock in firm against the back of the helmet
            and not wiggle. Utilize the Gentex HGU-55IG for this use case
          </li>
        </ul>
      </div>
      <div id="report-images">
        <div className="report-column">
          <img src={prev_des} className="design" alt="designs" />
          <img src={final_sel} className="design" alt="final selections" />
        </div>
        <div className="report-column" id="threedprint">
          <img src={print1} className="print" alt="3D print" />
          <img src={print2} className="print" alt="3D print" />
        </div>
      </div>
    </div>
  );
};

export default Report;
