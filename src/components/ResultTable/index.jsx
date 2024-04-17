import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { Card } from "./Card";
import { Modal } from "../Modal";
import "./ResultTable.css";

function ResultTable() {
  const { searchedProducts, isLoading, isOpen, isCartOpen } =
    useContext(SearchContext);

  const columns = isCartOpen ? 3 : 4;

  return (
    <div className="ResultContainer">
      <h2>Results:</h2>
      <div className="CardResultsContainer" style={{ "--columns": columns }}>
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          searchedProducts.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              rate={product.rating.rate}
            />
          ))
        )}
      </div>
      {isOpen && <Modal />}
    </div>
  );
}

export { ResultTable };
