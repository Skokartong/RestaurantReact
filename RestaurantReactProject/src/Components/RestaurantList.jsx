import React from "react";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="container mt-5">
      <h1>Restaurants</h1>
      <a href="/add-restaurant" className="btn btn-primary mb-3">
        Add New Restaurant
      </a>
      <table className="table table-striped table-responsive">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Additional Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.id}</td>
              <td>{restaurant.restaurantName}</td>
              <td>{restaurant.typeOfRestaurant}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.additionalInformation}</td>
              <td>
                <a
                  href={`/update-restaurant/${restaurant.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </a>
                <form
                  method="post"
                  className="d-inline"
                  action={`/delete-restaurant/${restaurant.id}`}
                >
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
