import React from "react";
import "./HomePageStyles.scss";
import Directory from "../components/Directory";

function HomePage(props) {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
