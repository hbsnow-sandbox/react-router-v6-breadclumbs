import { Outlet, useRoutes } from "react-router-dom";

import { Breadcrumbs, BreadcrumbsUser } from "../components/Breadcrumbs";
import { DefaultLayout } from "../layouts";
import { Home, User, Users } from "../pages";

export const createRoutes = (
  isPage = true
): Parameters<typeof useRoutes>[0] => [
  {
    path: "*",
    element: isPage ? <DefaultLayout /> : <Breadcrumbs text="ホーム" />,
    children: [
      {
        index: true,
        element: isPage ? <Home /> : <Outlet />,
      },
      {
        path: "users",
        element: isPage ? <Users /> : <Breadcrumbs text="ユーザ一覧" />,
        children: [
          {
            path: ":userId",
            element: isPage ? <User /> : <BreadcrumbsUser />,
          },
        ],
      },
    ],
  },
];
