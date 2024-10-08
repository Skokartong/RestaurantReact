import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/minty/bootstrap.min.css";
import axios from "axios";
import "../index.css";

const ConfirmationPage = () => {
  const location = useLocation();
  const { message } = location.state || { message: "Booking confirmed!" };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Booking Confirmation</h2>
      <div className="text-center mb-4">
        <img
          src={confirmationImage}
          alt="Booking Confirmed"
          className="img-fluid"
          style={{ maxWidth: "300px" }}
        />
      </div>
      <div className="alert alert-success text-center" role="alert">
        <h4 className="alert-heading">Success!</h4>
        <p>{message}</p>
        <hr />
        <p className="mb-0 text-center">
          Thank you for choosing us! We look forward to serving you.
        </p>
      </div>
      <div className="text-center mt-4">
        <a href="/" className="btn btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ConfirmationPage;
