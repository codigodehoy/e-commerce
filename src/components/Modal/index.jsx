import { useContext } from "react";
import "./Modal.css";
import { Rating } from "../Filter/RatingFilter/Rating";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "../Button/Button";
import { SearchContext } from "../../contexts/SearchContext";

function Modal() {
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
          <div className="AddProduct">
            <Button>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Modal };
