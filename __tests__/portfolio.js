// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Portfolio from "../pages/portfolio";

describe("Portfolio", () => {
  it("renders a heading", () => {
    render(<Portfolio />);

    const heading = screen.getByRole("heading", {
      name: /portfolio/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
