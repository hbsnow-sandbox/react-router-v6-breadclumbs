import { useEffect } from "react";

import { useSetBreadcrumbsContext } from "../../contexts";

export const Home = (): JSX.Element => {
  const setBreadcrumbs = useSetBreadcrumbsContext();

  useEffect(() => {
    setBreadcrumbs([{ title: "ホーム" }]);
  }, [setBreadcrumbs]);

  return (
    <div>
      <h2>ホーム</h2>

      <p>Home</p>
    </div>
  );
};
