import { useContext } from "react";
import { Detail } from "./Detail";
import { SearchContext } from "../../../contexts/SearchContext";
import "./Card.css";

function Card({ image, title, price, description, rate }) {
  const {
    setIsOpen,
    setImageProduct,
    setTitleProduct,
    setPriceProduct,
    setDescriptionProduct,
  } = useContext(SearchContext);

  const openModal = () => {
    setIsOpen(true);
    setImageProduct(image);
    setTitleProduct(title);
    setPriceProduct(price);
    setDescriptionProduct(description);
  };

  return (
    <div className="CardContainer">
        <div className="ProductImageContainer" onClick={openModal}>
          <img src={image} />
        </div>
        <Detail title={title} price={price} rate={rate} />
    </div>
  );
}

export { Card };
