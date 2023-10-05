import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Links from "../components/Links";

test("renders the h3 with the text 'Links'", () => {
  render(<Links />);
  expect(screen.queryByText("Links")).toBeInTheDocument();
});

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github={"https://github.com/mkoutsoukalis"} />);
  expect(screen.queryByText("https://github.com/mkoutsoukalis")).toBeInTheDocument();
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<Links linkedin={"https://linkedin.com/in/maria-koutsoukalis"} />);
  expect(
    screen.queryByText("https://linkedin.com/in/maria-koutsoukalis")
  ).toBeInTheDocument();
});
