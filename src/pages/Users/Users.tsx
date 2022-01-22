import useAspidaSWR from "@aspida/swr";
import { Link } from "react-router-dom";

import { client } from "../../api/client";

export const Users = (): JSX.Element => {
  const { data } = useAspidaSWR(client.users, "get");

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
