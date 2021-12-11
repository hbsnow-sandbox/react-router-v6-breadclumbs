import { useParams } from "react-router-dom";

import { DefaultLayout } from "../../layouts";

export const User = (): JSX.Element => {
  const { userId } = useParams();

  return (
    <DefaultLayout>
      <h2>ユーザ</h2>

      <p>User: {userId ?? "-"}</p>
    </DefaultLayout>
  );
};
