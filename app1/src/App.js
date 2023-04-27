import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// (async () => {
//   const app2 = await import(
//     // The ignore comment instructs webpack to do nothing to this import() so it stays an import() at runtime.
//     // https://github.com/webpack/webpack/issues/10446
//     /* webpackIgnore: true */
//     "app2"
//   );
//   console.log(app2.default());
// })();

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
