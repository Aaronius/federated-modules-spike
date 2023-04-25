# Federated Modules Spike

This example demos a basic host application loading remote component.

- `app1` is the host application.
- `app2` is a remote which exposes `App` and `getRoutes` modules.
- `app3` is a remote which exposes `App` and `getRoutes` modules.
- `registery-service` is a service that `app1` makes requests to at runtime to determine the URL for loading `app2` and `app3`.

# Running Demo

Run `npm start`. This will build and serve both `app1`, `app2`, `app3`, and `registery-service` on
ports `3001`, `3002`, `3003`, `3004` respectively.
