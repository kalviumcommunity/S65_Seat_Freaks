import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Our World Of Chairs</h1>
        <p>The most comfortable chairs are here to please You</p>
        <button className="home-button">Homepage</button>
      </div>
    </div>
  );
};

export default LandingPage;
