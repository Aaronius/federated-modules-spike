# Federated Modules Spike

This example demos a host application loading remotes based on remote URLs determined at runtime. The remote URLS are determined by querying by passing the remote's name to the registry service and the registry service returning the base path for the federated module.

- `app1` is the host application.
- `app2` is a remote which exposes an `App` module.
- `app3` is a remote which exposes an `App` module.
- `registery-service` is a service that `app1` makes requests to at runtime to determine the base URLs for loading `app2` and `app3`.

# Running Demo

Run `npm start`. This will build and serve both `app1`, `app2`, `app3`, and `registery-service` on
ports `3001`, `3002`, `3003`, `3004` respectively.
