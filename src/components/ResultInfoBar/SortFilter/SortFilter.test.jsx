import React from 'react';

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { SortFilter } from './SortFilter';


const setUp = () => {
  return {
    user: userEvent.setup(),
    setFilter: jest.fn(),
    mockUseContext: jest.spyOn(React, "useContext")
  };
};

describe("Sort Filter", () => {
    const {mockUseContext, setFilter } = setUp();

    beforeEach(() => {
        mockUseContext.mockReturnValue({
            setFilter
          });
    })
  
  it("should render select element with options ", () => {
    render(<SortFilter />);

    const name = screen.getByRole('option', { name: "Name"});
    const lowToHighPrice = screen.getByRole('option', { name: "Price: Low to High"});
    const highToLowPrice = screen.getByRole('option', { name: "Price: High to Low"});

    expect(name).toBeInTheDocument()
    expect(lowToHighPrice).toBeInTheDocument()
    expect(highToLowPrice).toBeInTheDocument()
  });

  it("should call setFilter with the Price_Low option", async ()=> {
    render(<SortFilter />);

    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, "Price_Low")


    expect(setFilter).toBeCalledWith("Price_Low");
  })
});
;
