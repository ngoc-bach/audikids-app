import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

export const expectedSocialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook"
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter"
  },
  {
    id: 3,
    href: "https://www.square.com",
    icon: "fab fa-squarespace"
  }
]

describe("Navbar", () => {
  it("renders successfully", () => {
    render(<Navbar />);

    const logo = screen.getByAltText("backroads");
    const toggleButton = screen.getByRole("button");

    expect(logo).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();
    expectedSocialLinks.map((link) => {
      const { id, href, icon } = link;
      const socialButton = screen.getByTestId(id);

      expect(socialButton).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-node-access
      const socialLink = socialButton.querySelector('a').getAttribute("href")
      // eslint-disable-next-line testing-library/no-node-access
      const socialImage = socialButton.querySelector('i')
      expect(socialLink).toBe(href)
      expect(socialImage.className).toBe(icon)
    });
  });
});
