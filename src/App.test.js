import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("See if first and last name are there", () => {
  const { getByTestId } = render(<ContactForm />);

  getByTestId(/first-name/i);
  getByTestId(/last-name/i);
});
