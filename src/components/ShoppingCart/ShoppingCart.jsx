import { Button } from "../Button";
import "./ShoppingCart.css";

export const ShoppingCart = ({ subtotal }) => {
  const handleOnClick = () => {};

  return (
    <div className="ContainerCart">
      <div className="CartHeader">
        <h1>Subtotal</h1>
        <h2 className="ShoppingCartPrice">{`$ ${subtotal}`}</h2>
        <Button
          type="button"
          styles={{ width: "112px", fontSize: "20px" }}
          onClick={handleOnClick}
        >
          Continue
        </Button>
      </div>
      <span></span>
      <div>
        <img src="" alt="" />
        <span></span>
      </div>
    </div>
  );
};
