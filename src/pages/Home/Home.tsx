import { useBreadcrumbs } from "../../hooks";

export const Home = (): JSX.Element => {
  useBreadcrumbs([{ title: "ホーム" }]);

  return (
    <div>
      <h2>ホーム</h2>

      <p>Home</p>
    </div>
  );
};
