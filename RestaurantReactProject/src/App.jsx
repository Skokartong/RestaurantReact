import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import RestaurantList from "./Components/RestaurantList";
import AccountList from "./Components/AccountList";
import BookingList from "./Components/BookingList";

function App() {
  const restaurants = [];
  const bookings = [];
  const accounts = [];

  return (
    <Router>
      <Switch>
        <Route path="/Home/Index" exact component={Home} />
        <Route path="Account/Login" component={Login} />
        <Route path="Account/Register" component={Register} />
        <Route path="/User/Index" element={<UserDashboard />} />
        <Route path="/Admin/Index" element={<AdminDashboard />} />
        <Route
          path="/Admin/ViewRestaurants"
          element={<RestaurantList restaurants={restaurants} />}
        />
        <Route
          path="/Admin/ViewBookings"
          element={<BookingList bookings={bookings} />}
        />
        <Route
          path="/Admin/ViewAccounts"
          element={<AccountList accounts={accounts} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
