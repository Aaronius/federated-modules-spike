import React from "react";
import importFederatedModule from "./importFederatedModule";

const App2 = React.lazy(() =>
  importFederatedModule({
    remote: "app2",
    module: "App",
  })
);

export default App2;
