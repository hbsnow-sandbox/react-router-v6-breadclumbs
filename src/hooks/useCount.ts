import { useCallback, useState } from "react";

type ReturnType = Readonly<
  [
    number,
    {
      countUp: () => void;
      countDown: () => void;
    }
  ]
>;

export const useCount = (initialValue = 0): ReturnType => {
  const [count, setCount] = useState(initialValue);

  const countUp = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const countDown = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return [count, { countUp, countDown }] as const;
};
