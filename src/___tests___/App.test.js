import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../components/MyFirstComponent", () => {
  return () => <div />;
});

it("Test App", () => {
  render(<App />);
  expect(screen.getByText("This is the frontpage")).toBeInTheDocument();
});
