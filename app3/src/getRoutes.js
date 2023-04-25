import React from "react";

const LazyShop = React.lazy(() => import("./Shop"));
const LazyCart = React.lazy(() => import("./Cart"));

const SuspenseContainer = ({ children }) => {
  return <React.Suspense fallback="Loading...">{children}</React.Suspense>;
};

const getRoutes = () => {
  // If we needed to asynchronously go retrieve routes for other apps that this app may load,
  // we could return a promise here that's resolved with all the collected routes.
  return [
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
  ];
};

export default getRoutes;
