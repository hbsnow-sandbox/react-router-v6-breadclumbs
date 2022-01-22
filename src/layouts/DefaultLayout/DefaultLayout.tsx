import { PropsWithChildren } from "react";

import { Link } from "react-router-dom";

import classes from "./index.module.css";

export type Breadcrumbs = {
  title: string;
  to?: string;
}[];

type Props = Readonly<
  PropsWithChildren<{
    breadcrumbs: Breadcrumbs;
  }>
>;

export const DefaultLayout = (props: Props): JSX.Element => {
  const { breadcrumbs, children } = props;

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

      <main>{children}</main>
    </div>
  );
};
