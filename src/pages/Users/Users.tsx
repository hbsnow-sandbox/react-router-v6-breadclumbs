import useAspidaSWR from "@aspida/swr";
import { Link } from "react-router-dom";

import { client } from "../../api/client";
import { useBreadcrumbs } from "../../hooks";

export const Users = (): JSX.Element => {
  const { data } = useAspidaSWR(client.users, "get");

  useBreadcrumbs([{ title: "ホーム", to: "/" }, { title: "ユーザ一覧" }]);

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
