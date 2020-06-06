import React from "react";
import "./HomepageStyles.scss";
import Directory from "../components/Directory";
import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default Homepage;
