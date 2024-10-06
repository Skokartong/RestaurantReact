import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Manage Restaurants</div>
            <div className="card-body">
              <h5 className="card-title">View and manage restaurants</h5>
              <Link to="/admin/view-restaurants" className="btn btn-light">
                View Restaurants
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Manage Accounts</div>
            <div className="card-body">
              <h5 className="card-title">View and manage customer accounts</h5>
              <Link to="/admin/view-accounts" className="btn btn-light">
                View Accounts
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Manage Bookings</div>
            <div className="card-body">
              <h5 className="card-title">View and manage bookings</h5>
              <Link to="/admin/view-bookings" className="btn btn-light">
                View Bookings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
