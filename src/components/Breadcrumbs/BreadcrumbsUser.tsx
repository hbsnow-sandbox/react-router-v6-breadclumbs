import useAspidaSWR from "@aspida/swr";
import { useParams } from "react-router-dom";

import { client } from "../../api/client";
import { assertIsDefined } from "../../utils/assertIsDefined";

export const BreadcrumbsUser = () => {
  const { userId } = useParams();
  assertIsDefined(userId);

  const { data } = useAspidaSWR(client.users._id(userId), "get");

  return <>{data ? data.body.name : "-"}</>;
};