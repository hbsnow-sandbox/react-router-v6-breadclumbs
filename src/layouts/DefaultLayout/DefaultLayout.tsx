import { PropsWithChildren } from "react";

type Props = Readonly<PropsWithChildren<unknown>>;

export const DefaultLayout = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <div>
      <header>
        <h1>Title</h1>
      </header>
      <nav>
        <ul>
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
