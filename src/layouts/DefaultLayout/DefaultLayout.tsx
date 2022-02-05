import { Link, Outlet } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import { routes } from "../../AppRoutes";
import classes from "./index.module.css";

export const DefaultLayout = (): JSX.Element => {
  const breadcrumbs = useBreadcrumbs(routes);

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
        <ol>
          {breadcrumbs.map(({ key, breadcrumb }) => (
            <li key={key}>{breadcrumb}</li>
          ))}
        </ol>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
