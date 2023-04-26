import React from "react";
import LandingPage from "./LandingPage";

const LazyPaymentMethods = React.lazy(() => import("./PaymentMethods"));
const LazyBilling = React.lazy(() => import("./Billing"));

const SuspenseContainer = ({ children }) => {
  return <React.Suspense fallback="Loading...">{children}</React.Suspense>;
};

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "billing",
        element: (
          <SuspenseContainer>
            <LazyBilling />
          </SuspenseContainer>
        ),
      },
      {
        path: "payment-methods",
        element: (
          <SuspenseContainer>
            <LazyPaymentMethods />
          </SuspenseContainer>
        ),
      },
    ],
  },
];

export default routes;
