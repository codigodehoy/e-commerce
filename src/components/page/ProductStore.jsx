import React, { useContext } from "react";

import { Navbar } from "../Navbar";
import { ResultInfoBar } from "../ResultInfoBar";
import { Filter } from "../Filter";
import { ResultTable } from "../ResultTable";
import { ShoppingCart } from "../ShoppingCart";
import { SearchContext } from "../../contexts/SearchContext";
import "./ProductStore.css";

export const ProductStore = () => {
  const { isCartOpen, shoppingCartTotal } = useContext(SearchContext);
  const containerStyle = isCartOpen
    ? "ContainerWithCart"
    : "ContainerWithoutCart";
  return (
    <div>
      <Navbar />
      <ResultInfoBar />
      <div className={containerStyle}>
        <Filter />
        <ResultTable />
        {isCartOpen && <ShoppingCart subtotal={shoppingCartTotal} />}
      </div>
    </div>
  );
};
