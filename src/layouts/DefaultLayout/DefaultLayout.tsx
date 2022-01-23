import { Link, Outlet } from "react-router-dom";

import { useBreadcrumbsContext } from "../../contexts";
import classes from "./index.module.css";

export const DefaultLayout = (): JSX.Element => {
  const breadcrumbs = useBreadcrumbsContext();

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
        <ol className={classes.breadcrumbs}>
          {breadcrumbs.map((item, i) => {
            return (
              <li key={i}>
                {item.to ? <Link to={item.to}>{item.title}</Link> : item.title}
              </li>
            );
          })}
        </ol>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
