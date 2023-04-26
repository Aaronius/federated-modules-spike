import React from "react";
import LandingPage from "./LandingPage";
import LazyApp2 from "./LazyApp2";
import LazyApp3 from "./LazyApp3";
import AboutUs from "./AboutUs";

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
        path: "app2/*",
        element: <LazyApp2 />,
      },
      {
        path: "app3/*",
        element: <LazyApp3 />,
      },
    ],
  },
];

export default routes;
