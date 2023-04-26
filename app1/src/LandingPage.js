import React from "react";
import { Link, Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>App 1</h1>

      <h2>Navigation</h2>

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
          <Link to="/app3">App 3</Link>
        </li>
        <li>
          <Link to="/app3/shop">App 3 - Shop</Link>
        </li>
        <li>
          <Link to="/app3/cart">App 3 - Cart</Link>
        </li>
      </ul>

      <React.Suspense fallback="Loading...">
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default LandingPage;
