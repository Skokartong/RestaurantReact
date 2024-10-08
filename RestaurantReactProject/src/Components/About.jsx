import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/minty/bootstrap.min.css";
import "../index.css";

const About = () => {
  const aboutData =
    "Forky is an innovative restaurant booking system that aims to enhance your dining experience. Our platform allows you to reserve tables easily and explore a wide range of restaurant menus.";

  return (
    <div className="container mt-5">
      <h2 className="aboutforky text-center">About Forky</h2>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p className="card-text">{aboutData}</p>
        </div>
      </div>
      <h3 className="benefitsmember text-center">
        <strong>Benefits of Membership:</strong>
      </h3>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Free table reservations at any participating restaurant.
        </li>
        <li className="list-group-item">
          View full menus from restaurants around the city.
        </li>
        <li className="list-group-item">
          Read and leave reviews for restaurants you've visited.
        </li>
      </ul>

      <div className="text-center">
        <Link to="/restaurants" className="btn btn-primary me-2 btn-lg">
          View Restaurants
        </Link>
        <Link to="/booking" className="btn btn-success btn-lg">
          Book a Table
        </Link>
      </div>
    </div>
  );
};

export default About;
