import { DefaultLayout } from "../../layouts";

export const Users = (): JSX.Element => {
  return (
    <DefaultLayout>
      <h2>ユーザ一覧</h2>

      <ul>
        <li>
          <a href="/users/hbsnow">hbsnow</a>
        </li>
      </ul>
    </DefaultLayout>
  );
};
