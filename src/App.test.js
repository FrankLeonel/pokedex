import { render, screen } from "@testing-library/react";
import App from "./App";

test("render text pokédex", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});
