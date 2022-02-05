import { useRoutes } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import { BreadcrumbsUser } from "./components/Breadcrumbs";
import { DefaultLayout } from "./layouts";
import { Home, User, Users } from "./pages";

export const routes: Parameters<typeof useBreadcrumbs>[0] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        breadcrumb: "ホーム",
      },
      {
        path: "/users",
        element: <Users />,
        breadcrumb: "ユーザ一覧",
      },
      {
        path: "/users/:userId",
        element: <User />,
        breadcrumb: BreadcrumbsUser,
      },
    ],
  },
];

export const AppRoutes = (): JSX.Element => {
  const element = useRoutes(routes);

  return <>{element}</>;
};
