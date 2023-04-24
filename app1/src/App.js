import React from "react";
import importFederatedModule from "./import-federated-module";

const App2 = React.lazy(() =>
  importFederatedModule({
    name: "app2",
    module: "./Widget",
  })
);

const App3 = React.lazy(() =>
  importFederatedModule({
    name: "app3",
    module: "./Widget",
  })
);

const App = () => {
  const [remoteName, setRemoteName] = React.useState({});

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>App 1</h2>
      <p>
        The Dynamic System will take advantage Module Federation{" "}
        <strong>remotes</strong> and <strong>exposes</strong>. It will not load
        any components or modules that have been loaded already.
      </p>
      <button onClick={() => setRemoteName("app2")}>Load App 2 Widget</button>
      <button onClick={() => setRemoteName("app3")}>Load App 3 Widget</button>
      <div style={{ marginTop: "2em" }}>
        <React.Suspense fallback="Loading...">
          {remoteName === "app2" && <App2 />}
          {remoteName === "app3" && <App3 />}
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
