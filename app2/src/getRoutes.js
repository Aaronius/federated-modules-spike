import React from "react";

const LazyPaymentMethods = React.lazy(() => import("./PaymentMethods"));
const LazyBilling = React.lazy(() => import("./Billing"));

const SuspenseContainer = ({ children }) => {
  return <React.Suspense fallback="Loading...">{children}</React.Suspense>;
};

const getRoutes = () => {
  // If we needed to asynchronously go retrieve routes for other apps that this app may load,
  // we could return a promise here that's resolved with all the collected routes.
  return [
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
  ];
};

export default getRoutes;
