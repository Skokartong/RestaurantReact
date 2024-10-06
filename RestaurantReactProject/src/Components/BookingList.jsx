import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div className="container mt-5">
      <h1>Customer Bookings</h1>
      <table className="table table-striped table-responsive">
        <thead className="table-light">
          <tr>
            <th>Customer Name</th>
            <th>Restaurant Name</th>
            <th>Number of Guests</th>
            <th>Booking Start</th>
            <th>Booking End</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.customerName}</td>
              <td>{booking.restaurantName}</td>
              <td>{booking.numberOfGuests}</td>
              <td>{new Date(booking.bookingStart).toLocaleString()}</td>
              <td>{new Date(booking.bookingEnd).toLocaleString()}</td>
              <td>{booking.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
