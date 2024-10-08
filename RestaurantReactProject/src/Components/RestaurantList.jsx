import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/minty/bootstrap.min.css";
import "../index.css";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [menus, setMenus] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7275/viewrestaurants"
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleViewMenu = async (restaurantId) => {
    try {
      const response = await axios.get(
        `https://localhost:7275/viewmenu/${restaurantId}`
      );
      setMenus((prevMenus) => ({
        ...prevMenus,
        [restaurantId]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const handleBookTable = (restaurantId) => {
    navigate(`/booking/${restaurantId}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="titlerestaurant">Restaurants</h1>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Additional Info</th>
            <th>Menu</th>
            <th>Action</th>
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
                <button
                  onClick={() => handleViewMenu(restaurant.id)}
                  className="btn btn-info"
                >
                  View Menu
                </button>
                {menus[restaurant.id] && menus[restaurant.id].length > 0 && (
                  <ul className="list-group mt-2">
                    {menus[restaurant.id].map((menuItem) => (
                      <li className="list-group-item" key={menuItem.id}>
                        {menuItem.NameOfDish} - {menuItem.price} $
                      </li>
                    ))}
                  </ul>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleBookTable(restaurant.id)}
                  className="btn btn-primary"
                >
                  Book Table
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
