import React from "react";

import { Button } from "./components/Button";
import { useCount } from "./hooks/useCount";

export const App = (): JSX.Element => {
  const [count, { countUp, countDown }] = useCount();

  return (
    <main>
      <p>count is: {count}</p>
      <p>
        <Button onClick={() => countUp()}>count up</Button>
      </p>
      <p>
        <Button onClick={() => countDown()}>count down</Button>
      </p>
    </main>
  );
};
