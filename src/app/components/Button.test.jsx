// src/components/Button.test.jsx
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Button label="Click me" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
