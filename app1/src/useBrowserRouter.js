import { useMemo } from "react";
import { createBrowserRouter } from "react-router-dom";
import useRoutes from "./useRoutes";

const useBrowserRouter = (getRoutesFn) => {
  const { isLoading, isError, error, routes } = useRoutes(getRoutesFn);

  const router = useMemo(() => {
    if (routes) {
      return createBrowserRouter(routes);
    }
  }, [routes]);

  return { isLoading, isError, error, router };
};

export default useBrowserRouter;
