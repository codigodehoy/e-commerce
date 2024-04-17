import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ShoppingCart } from "./ShoppingCart";

describe("ShoppingCart", () => {
  it("should render the ShoppingCart component with the subtotal and price", () => {
    render(<ShoppingCart subtotal={500} />);

    const subtotal = screen.getByRole("heading", { name: "Subtotal" });
    const price = screen.getByRole("heading", { name: "$ 500" });

    expect(subtotal).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
