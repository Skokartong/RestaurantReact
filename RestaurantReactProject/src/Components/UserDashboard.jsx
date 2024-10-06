import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">User Dashboard</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Account Management</h5>
              <Link to="/update-account" className="btn btn-primary">
                Update Account
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Restaurant Viewing</h5>
              <Link to="/view-restaurants" className="btn btn-primary">
                View Restaurants
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Booking Management</h5>
              <Link to="/view-bookings" className="btn btn-primary">
                View Bookings
              </Link>
              <Link to="/book-table" className="btn btn-secondary">
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
