import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

test("Hero renders successfully", () => {
  render(<Hero />);

  const heroHeader = screen.getByText(/continue exploring/i);
  const heroDescription = screen.getByText(
    /Reading is better with Audi Kids, a reading app that have over 1,000 books only for children/i
  );
  const heroLink = screen.getByRole("link", { name: "explore books" });

  expect(heroHeader).toBeInTheDocument();
  expect(heroDescription).toBeInTheDocument();
  expect(heroLink).toBeInTheDocument();
});
