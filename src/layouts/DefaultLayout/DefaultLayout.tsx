import { Link, Outlet } from "react-router-dom";

import classes from "./index.module.css";

export const DefaultLayout = (): JSX.Element => {
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};
