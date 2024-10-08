import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../index.css";

const BookingForm = () => {
  const { restaurantId } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurantId || ""
  );
  const [bookingStart, setBookingStart] = useState("");
  const [bookingEnd, setBookingEnd] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [accountId, setAccountId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7275/viewrestaurants"
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingDetails = {
      FK_RestaurantId: selectedRestaurant,
      BookingStart: bookingStart,
      BookingEnd: bookingEnd,
      NumberOfGuests: numberOfGuests,
      FK_AccountId: accountId,
    };

    try {
      const availabilityResponse = await axios.post(
        "https://localhost:7275/checkavailability",
        bookingDetails
      );
      const availableTables = availabilityResponse.data;

      if (availableTables.length > 0) {
        await axios.post("https://localhost:7275/newbooking", bookingDetails);
        navigate("/confirmation", { state: { message: "Table booked!" } });
      } else {
        setMessage("No available tables");
      }
    } catch (error) {
      console.error("Error during booking", error);
      setMessage("An error occurred, please try later.");
    }
  };

  return (
    <div className="bookingcontainer mt-5">
      <h2 className="bookingtitle text-center">Book a Table</h2>
      <form onSubmit={handleBooking} className="custom-form rounded shadow">
        <div className="form-group mb-3">
          <label htmlFor="restaurantSelect" className="form-label">
            Choose restaurant:
          </label>
          <select
            id="restaurantSelect"
            className="form-select"
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(e.target.value)}
            required
          >
            <option value="">Choose a restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.restaurantName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bookingStart" className="form-label">
            Booking Start:
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="bookingStart"
            value={bookingStart}
            onChange={(e) => setBookingStart(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bookingEnd" className="form-label">
            Booking End:
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="bookingEnd"
            value={bookingEnd}
            onChange={(e) => setBookingEnd(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="numberOfGuests" className="form-label">
            Number of Guests:
          </label>
          <input
            type="number"
            className="form-control"
            id="numberOfGuests"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="accountId" className="form-label">
            Account ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="accountId"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Table
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default BookingForm;
