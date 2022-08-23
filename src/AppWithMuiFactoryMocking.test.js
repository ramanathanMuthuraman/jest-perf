import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./AppWithMuiFactoryMocking";

jest.mock("@mui/material", () => ({
  Button: ({ children }) => <button>{children}</button>,
}));

test("renders an MUI button", function AppWithMuiFactoryMocking() {
  render(<App />);
  const button = screen.getByText(/We have factory mocked the button/i);
  expect(button).toBeInTheDocument();
});
