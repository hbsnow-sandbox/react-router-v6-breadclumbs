import { Link, Outlet, Route, Routes } from "react-router-dom";

import classes from "./index.module.css";
import { Username } from "./Username";

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
      <nav>
        <ol className={classes.breadcrumbs}>
          <Routes>
            <Route path="/" element={<li>ホーム</li>} />
            <Route
              path="/*"
              element={
                <>
                  <li>
                    <Link to="/">ホーム</Link>
                  </li>
                  <Outlet />
                </>
              }
            >
              <Route path="users" element={<li>ユーザ一覧</li>} />
              <Route
                path="/*"
                element={
                  <>
                    <li>
                      <Link to="/users">ユーザ一覧</Link>
                    </li>
                    <Outlet />
                  </>
                }
              >
                <Route
                  path="users/:userId"
                  element={
                    <li>
                      <Username />
                    </li>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </ol>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
