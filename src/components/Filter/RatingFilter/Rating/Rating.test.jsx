import {render} from '@testing-library/react'

import { Rating } from "./index";

describe("Rating", () => {
  it("should render two colored stars when rate is 2 ", () => {
    const {getAllByTestId} = render(<Rating rate={2} />);

    const stars = getAllByTestId("graphicsFilled")

    expect(stars.length).toBe(2)
  });

  it("should render five uncolored stars when rate is 0 ", () => {
    const {getAllByTestId} = render(<Rating rate={0} />);

    const stars = getAllByTestId("graphicsNotFilled")

    expect(stars.length).toBe(5)
  });
});
