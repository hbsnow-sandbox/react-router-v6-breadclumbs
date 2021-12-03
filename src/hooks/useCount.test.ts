import { act, renderHook } from "@testing-library/react-hooks";

import { useCount } from "./useCount";

describe("useCount", () => {
  it("should be initial value", () => {
    const { result } = renderHook(() => useCount(0));

    expect(result.current[0]).toBe(0);
  });

  test("should increase by 1 when countUp", () => {
    const { result } = renderHook(() => useCount(0));

    act(() => {
      result.current[1].countUp();
    });

    expect(result.current[0]).toBe(1);
  });

  test("should decrease by 1 when countUp", () => {
    const { result } = renderHook(() => useCount(0));

    act(() => {
      result.current[1].countDown();
    });

    expect(result.current[0]).toBe(-1);
  });
});
