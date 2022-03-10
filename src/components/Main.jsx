import React from 'react';
import "./Main.css";
import homeImg from "../components/images/dds-helmet.png";
const Main = () => {
    return (
        <div className="main-section" id="main">
            <img
        src={homeImg}
        id = "dds-helmet"
        alt="homepage"
      />
 
        </div>
    );
};

export default Main;