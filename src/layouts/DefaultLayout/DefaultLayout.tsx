import { PropsWithChildren } from "react";

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};
