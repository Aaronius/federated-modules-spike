import React from "react";
import importFederatedModule from "./importFederatedModule";

const App3 = React.lazy(() =>
  importFederatedModule({
    remote: "ayx_app3",
    module: "App",
  })
);

export default App3;
