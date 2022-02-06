import { useMemo } from "react";

import { useLocation, useResolvedPath } from "react-router-dom";

export const useIsActive = () => {
  const location = useLocation();
  const resolvedLocation = useResolvedPath("");

  const isActive = useMemo(() => {
    return location.pathname === resolvedLocation.pathname;
  }, [location.pathname, resolvedLocation.pathname]);

  return isActive;
};
