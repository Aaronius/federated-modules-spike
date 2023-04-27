import React from "react";
// import importFederatedModule from "./importFederatedModule";
//
// const LazyApp2 = React.lazy(() =>
//   importFederatedModule({
//     remote: "ayx_app2",
//     module: "App",
//   })
// );
//
// export default LazyApp2;

// import app2Promise from "app2";

const LazyApp2 = React.lazy(() => import("app2"));

export default LazyApp2;
