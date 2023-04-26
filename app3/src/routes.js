import React from "react";
import LandingPage from "./LandingPage";

const LazyShop = React.lazy(() => import("./Shop"));
const LazyCart = React.lazy(() => import("./Cart"));

const SuspenseContainer = ({ children }) => {
  return <React.Suspense fallback="Loading...">{children}</React.Suspense>;
};

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "shop",
        element: (
          <SuspenseContainer>
            <LazyShop />
          </SuspenseContainer>
        ),
      },
      {
        path: "cart",
        element: (
          <SuspenseContainer>
            <LazyCart />
          </SuspenseContainer>
        ),
      },
    ],
  },
];

export default routes;
