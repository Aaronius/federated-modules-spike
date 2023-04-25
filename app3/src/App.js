import React from "react";
import moment from "moment";
import { Link, Outlet } from "react-router-dom";

const App = () => {
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
          <Link to="/app3">App 3</Link>
        </li>
        <li>
          <Link to="/app3/shop">App 3 - Shop</Link>
        </li>
        <li>
          <Link to="/app3/cart">App 3 - Cart</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default App;
