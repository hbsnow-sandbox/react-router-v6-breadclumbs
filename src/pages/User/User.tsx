import { useEffect } from "react";

import useAspidaSWR from "@aspida/swr";
import { useParams } from "react-router-dom";

import { client } from "../../api/client";
import { Breadcrumbs, useSetBreadcrumbsContext } from "../../contexts";
import { assertIsDefined } from "../../utils/assertIsDefined";

export const User = (): JSX.Element => {
  const { userId } = useParams();
  assertIsDefined(userId);

  const { data } = useAspidaSWR(client.users._id(userId), "get");

  const setBreadcrumbs = useSetBreadcrumbsContext();

  useEffect(() => {
    const breadcrumbs: Breadcrumbs = [
      { title: "ホーム", to: "/" },
      { title: "ユーザ一覧", to: "/users" },
    ];
    if (data) {
      breadcrumbs.push({ title: data.body.name });
    }
    setBreadcrumbs(breadcrumbs);
  }, [data, setBreadcrumbs]);

  return (
    <div>
      <h2>ユーザ</h2>

      {data ? <p>User: {data.body.name}</p> : <p>Loading...</p>}
    </div>
  );
};
