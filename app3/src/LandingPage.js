import moment from "moment/moment";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react";

const LandingPage = () => {
  return (
    <div
      style={{
        padding: "2em",
        backgroundColor: "lemonchiffon",
      }}
    >
      <h2>App 3</h2>

      <p>
        Using <strong>momentjs</strong> ({moment.version}) to format this date:{" "}
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>

      <h3>Navigation</h3>

      <ul>
        <li>
          <Link to="/">App 1</Link>
        </li>
        <li>
          <Link to="/about-us">App 1 - About Us</Link>
        </li>
        <li>
          <Link to="/app2">App 2</Link>
        </li>
        <li>
          <Link to="/app2/billing">App 2 - Billing</Link>
        </li>
        <li>
          <Link to="/app2/payment-methods">App 2 - Payment Methods</Link>
        </li>
        <li>
          <Link to="">App 3</Link>
        </li>
        <li>
          <Link to="shop">App 3 - Shop</Link>
        </li>
        <li>
          <Link to="cart">App 3 - Cart</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default LandingPage;
