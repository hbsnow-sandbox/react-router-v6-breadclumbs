import { PropsWithChildren } from "react";

import { Link } from "react-router-dom";

import classes from "./index.module.css";

type Props = Readonly<PropsWithChildren<unknown>>;

export const DefaultLayout = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <div>
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
      <main>{children}</main>
    </div>
  );
};
