import React from "react";
import LandingPage from "./LandingPage";
// import LazyApp2 from "./LazyApp2";
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
      // {
      //   path: "app2",
      //   element: (
      //     <App2/>
      //   ),
      // },
    ],
  },
];

export default routes;
