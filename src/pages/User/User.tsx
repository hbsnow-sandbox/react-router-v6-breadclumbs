import useAspidaSWR from "@aspida/swr";
import { useParams } from "react-router-dom";

import { client } from "../../api/client";
import { assertIsDefined } from "../../utils/assertIsDefined";

export const User = (): JSX.Element => {
  const { userId } = useParams();
  assertIsDefined(userId);

  const { data } = useAspidaSWR(client.users._id(userId), "get");

  return (
    <div>
      <h2>ユーザ</h2>

      {data ? <p>User: {data.body.name}</p> : <p>Loading...</p>}
    </div>
  );
};
