import React from "react";
import importFederatedModule from "./importFederatedModule";
import LandingPage from "./LandingPage";
import App2 from "./App2";
import App3 from "./App3";

const LazyAboutUs = React.lazy(() => import("./AboutUs"));
const SuspenseContainer = ({ children }) => {
  return <React.Suspense fallback="Loading...">{children}</React.Suspense>;
};

const getRoutes = async () => {
  const [getApp2RoutesModule, getApp3RoutesModule] = await Promise.all([
    importFederatedModule({
      remote: "ayx_app2",
      module: "./getRoutes",
    }),
    importFederatedModule({
      remote: "ayx_app3",
      module: "getRoutes",
    }),
  ]);

  const app2Routes = getApp2RoutesModule.default();
  const app3Routes = getApp3RoutesModule.default();

  const routes = [
    {
      path: "/",
      element: <LandingPage />,
      children: [
        {
          path: "about-us",
          element: (
            <SuspenseContainer>
              <LazyAboutUs />
            </SuspenseContainer>
          ),
        },
        {
          path: "app2",
          element: <App2 />,
          children: app2Routes,
        },
        {
          path: "app3",
          element: <App3 />,
          children: app3Routes,
        },
      ],
    },
  ];

  return routes;
};

export default getRoutes;
