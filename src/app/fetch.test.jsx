import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Fetch from "./Fetch";

// mock global fetch
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test("loads and displays greeting", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ greeting: "Hello World" }),
  });

  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText("Load Greeting"));

  const greeting = await screen.findByText("Hello World");
  expect(greeting).toBeInTheDocument();
});
