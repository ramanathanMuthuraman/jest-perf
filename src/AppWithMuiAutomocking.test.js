import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./AppWithMuiAutomocking";

jest.mock("@mui/material/Button");

test("renders an MUI button", function AppWithMuiAutomocking() {
  render(<App />);
  const button = screen.getByText(/We have automocked the button/i);
  expect(button).toBeInTheDocument();
});
