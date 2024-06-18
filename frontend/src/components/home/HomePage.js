import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => (
  // bootstrap
  <div className="HomePage-Container">
    <h1 className="HomePage-welcomeMessage">
      PunnyPix here to display your photo feed
    </h1>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
