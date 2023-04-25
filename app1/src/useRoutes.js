import { useEffect, useState } from "react";

const useRoutes = (getRoutesFn) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      let routes;

      try {
        routes = await getRoutesFn();
      } catch (e) {
        if (isMounted) {
          setError(e);
          setIsError(true);
          setIsLoading(false);
        }
        return;
      }

      if (isMounted) {
        setRoutes(routes);
        setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoading, isError, error, routes };
};

export default useRoutes;
