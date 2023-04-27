import React from "react";
import LandingPage from "./LandingPage";
import LazyApp2 from "./LazyApp2";
import AboutUs from "./AboutUs";

import App2 from "app2";

(async () => {
  console.log(App2);
})();

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "about-us",
        element: (
          <React.Suspense fallback="Loading...">
            <AboutUs />
          </React.Suspense>
        ),
      },
      {
        path: "app2",
        element: (
          <React.Suspense fallback="Loading...">
            <LazyApp2 />
          </React.Suspense>
        ),
      },
    ],
  },
];

export default routes;
