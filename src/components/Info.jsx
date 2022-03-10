import React from "react";
import "./Info.css";
import fea_analysis from "./images/FEA_Analysis.pdf";
import fea_data from "./images/FEA_Data.pdf";
import ku from "./images/ku.png";
import logo from "./images/dilatant-logo.png";
const Info = () => {
  return (
    <div className="info-section" id="info">
      <div className="information-title">
        <strong>Extra Information</strong>
      </div>
      <div id="data-title">
        If you want to see hard data, please click the two links below:
      </div>
      <div id="data">
        <a href={fea_analysis} target="_blank" rel="noopener noreferrer">
          -Finite Element Analysis-
        </a>
        <br />
        <a href={fea_data} target="_blank" rel="noopener noreferrer">
          -Finite Element Data-
        </a>
      </div>
      <div id="spec-th">
        <em>Special Thanks</em>
      </div>
      <div id="thanks-img">
        <img src={logo} className="logo" alt="logo" />
        <img src={ku} className="logo" alt="ku" />
      </div>
    </div>
  );
};

export default Info;
