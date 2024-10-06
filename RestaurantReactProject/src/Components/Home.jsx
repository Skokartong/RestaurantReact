import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost:7088/api/home")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container text-center">
        <div className="card shadow-lg mx-auto" style={{ maxWidth: "600px" }}>
          <div className="card-body">
            <h1 className="display-4 fw-bold">Welcome to Forky!</h1>
            <h3 className="mt-3 text-primary">
              Restaurant booking, menus, and reviews - all in a bite.
            </h3>
            <p className="lead mt-4">{message}</p>
            <a href="/about" className="btn btn-primary btn-lg mt-4">
              Learn more
            </a>
          </div>
        </div>
        <div className="mt-5">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Forky Restaurant"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
