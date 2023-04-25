import React from "react";
import { RouterProvider } from "react-router-dom";
import getRoutes from "./getRoutes";
import useBrowserRouter from "./useBrowserRouter";

const App = () => {
  const { error, router } = useBrowserRouter(getRoutes);

  if (error) {
    return (
      <div>An error occurred while loading routes: {error.toString()}</div>
    );
  }

  if (!router) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
