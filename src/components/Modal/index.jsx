import { useContext, useState } from "react";
import "./Modal.css";
import { Rating } from "../Filter/RatingFilter/Rating";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "../Button/Button";
import { SearchContext } from "../../contexts/SearchContext";
import { Stepper } from "../Stepper/Stepper";

function Modal() {
  const [countItems, setCountItems] = useState(1);
  const {
    setIsOpen,
    imageProduct,
    titleProduct,
    priceProduct,
    descriptionProduct,
  } = useContext(SearchContext);

  const setCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddItem = () => {
    setCountItems(countItems + 1);
  };

  const handleRemoveItem = () => {
    if (countItems > 1) {
      setCountItems(countItems - 1);
    }
  };

  return (
    <div className="ModalContainer">
      <div className="ContentModalContainer">
        <div className="ProductImageContainer">
          <AiOutlineCloseCircle
            className="closeModal"
            onClick={setCloseModal}
          />
          <img src={imageProduct} />
        </div>
        <div className="DetailsModalContainer">
          <div className="HeaderDetailModalContainer">
            <h3>{titleProduct}</h3>
            <h3>${priceProduct}</h3>
          </div>
          <Rating rate={3} />
          <h6>{descriptionProduct}</h6>
          <div className="FooterDetail">
            <Stepper
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              numberItems={countItems}
            />
            <div className="AddProduct">
              <Button>Add</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Modal };
