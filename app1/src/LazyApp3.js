import React from "react";
import importFederatedModule from "./importFederatedModule";

const LazyApp3 = React.lazy(() =>
  importFederatedModule({
    remote: "ayx_app3",
    module: "App",
  })
);

export default LazyApp3;
