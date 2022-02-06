import { useRoutes } from "react-router-dom";

import { createRoutes } from "./utils/createRoutes";

export const AppRoutes = (): JSX.Element => {
  const routes = createRoutes();
  const element = useRoutes(routes);

  return <>{element}</>;
};
