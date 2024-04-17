import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Stepper } from "./Stepper";

jest.mock("react-icons/ci", () => ({
  CiCirclePlus: () => <>+</>,
  CiCircleMinus: () => <>-</>,
}));

const setUp = () => {
  return {
    user: userEvent.setup(),
    handleAddItem: jest.fn(),
    handleRemoveItem: jest.fn(),
    countItems: 1,
  };
};

describe("Stepper", () => {
  const { user, handleAddItem, handleRemoveItem, countItems } = setUp();

  it("should invoke onAddItem function", async () => {
    render(
      <Stepper
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        numberItems={countItems}
      />
    );

    const plusButton = screen.getByText("+");
    await user.click(plusButton);

    expect(handleAddItem).toHaveBeenCalled();
  });

  it("should invoke onRemoveItem function", async () => {
    render(
      <Stepper
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        numberItems={countItems}
      />
    );

    const minusButton = screen.getByText("-");
    await user.click(minusButton);

    expect(handleRemoveItem).toHaveBeenCalled();
  });
});
