import useAspidaSWR from "@aspida/swr";
import { Link, Outlet } from "react-router-dom";

import { client } from "../../api/client";
import { useIsActive } from "../../hooks/useIsActive";

export const Users = (): JSX.Element => {
  const { data } = useAspidaSWR(client.users, "get");
  const isActive = useIsActive();

  if (!isActive) {
    return <Outlet />;
  }

  return (
    <div>
      <h2>ユーザ一覧</h2>

      {data ? (
        <ul>
          {data.body.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
