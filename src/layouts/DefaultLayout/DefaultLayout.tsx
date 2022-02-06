import { Link, Outlet, useRoutes } from "react-router-dom";

import { createRoutes } from "../../utils/createRoutes";
import classes from "./index.module.css";

export const DefaultLayout = (): JSX.Element => {
  const routes = createRoutes(false);
  const breadcrumbs = useRoutes(routes);

  return (
    <div className={classes.root}>
      <header>
        <h1>Title</h1>
      </header>
      <nav>
        <ul className={classes.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ol>{breadcrumbs}</ol>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
