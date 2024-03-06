import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

import { TypeFilter } from "./index";

const setUp = () => {
  return {
    user: userEvent.setup(),
    setFiltersByCategory: jest.fn(),
    filtersByCategory: [],
    mockUseContext: jest.spyOn(React, "useContext"),
    options: [{ id: 1, label: "Jewelery" }],
  };
};

describe("Type Filter", () => {
  const {
    user,
    mockUseContext,
    setFiltersByCategory,
    filtersByCategory,
    options,
  } = setUp();

  beforeEach(() => {
    mockUseContext.mockReturnValue({
      filtersByCategory,
      setFiltersByCategory,
    });
  });

  it("should add a category to filtersByCategory", async () => {
    render(<TypeFilter options={options} />);

    const checkbox = screen.getByRole("checkbox", {name: "Jewelery"});
    await user.click(checkbox);

    expect(setFiltersByCategory).toHaveBeenCalledWith(["jewelery"]);
  });

  it("should remove the Jewelery category from filtersByCategory", async () => {
    render(<TypeFilter options={options} />);

    const checkbox = screen.getByRole("checkbox", {name: "Jewelery"});
    await user.dblClick(checkbox)

    expect(setFiltersByCategory).toHaveBeenCalledWith([]);
  });
});
