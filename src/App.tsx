import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { BreadcrumbsProvider } from "./contexts";

export const App = (): JSX.Element => {
  return (
    <BreadcrumbsProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </BreadcrumbsProvider>
  );
};
