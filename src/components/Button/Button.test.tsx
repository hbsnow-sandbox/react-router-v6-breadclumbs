import React from "react";

import { render, screen } from "@testing-library/react";

import { Button } from ".";

describe("Button Component", () => {
  it("render the container", () => {
    render(<Button>button</Button>);

    const target = screen.getByTestId("button");
    expect(target).toHaveTextContent("button");
  });
});
