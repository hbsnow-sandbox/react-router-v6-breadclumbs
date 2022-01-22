import { Breadcrumbs, DefaultLayout } from "../../layouts";

const breadcrumbs: Breadcrumbs = [{ title: "ホーム" }];

export const Home = (): JSX.Element => {
  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <h2>ホーム</h2>

      <p>Home</p>
    </DefaultLayout>
  );
};
