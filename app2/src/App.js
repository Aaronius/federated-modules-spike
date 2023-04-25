import React from "react";
import moment from "moment";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div
      style={{
        padding: "2em",
        backgroundColor: "lavender",
      }}
    >
      <h2>App 2</h2>

      <p>
        Using <strong>momentjs</strong> ({moment.version}) to format this date:{" "}
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>

      <h3>Navigation</h3>

      <ul>
        <li>
          <Link to="/app2">App 2</Link>
        </li>
        <li>
          <Link to="/app2/billing">App 2 - Billing</Link>
        </li>
        <li>
          <Link to="/app2/payment-methods">App 2 - Payment Methods</Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
