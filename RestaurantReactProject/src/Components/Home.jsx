import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import forkyLogo from "../assets/forkylogo.png";
import "../index.css";

function Home() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#c9efc7" }}
    >
      <div className="container text-center">
        <img
          src={forkyLogo}
          alt="Forky Logo"
          className="mb-4"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div
          className="card shadow-lg mx-auto custom-card"
          style={{ maxWidth: "600px", backgroundColor: "#fff" }}
        >
          <div className="card-body">
            <h1 className="display-4 fw-bold text-dark">Welcome to Forky</h1>
            <p className="lead mt-4 text-dark">
              Your one-stop solution for restaurant bookings and reviews!
            </p>
            <a href="/about" className="btn btn-primary btn-lg mt-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
