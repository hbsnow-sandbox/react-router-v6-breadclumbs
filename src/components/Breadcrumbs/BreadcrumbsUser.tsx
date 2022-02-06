import useAspidaSWR from "@aspida/swr";
import { useParams } from "react-router-dom";

import { client } from "../../api/client";
import { assertIsDefined } from "../../utils/assertIsDefined";
import { Breadcrumbs } from "./Breadcrumbs";

export const BreadcrumbsUser = () => {
  const { userId } = useParams();
  assertIsDefined(userId);

  const { data } = useAspidaSWR(client.users._id(userId), "get");

  return <Breadcrumbs text={data ? data.body.name : "-"} />;
};
