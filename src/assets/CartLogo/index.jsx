import { useContext } from "react";

import { SearchContext } from "../../contexts/SearchContext";
import "./CartLogo.css";

function CartLogo() {
  const { isCartOpen, setIsCartOpen } = useContext(SearchContext);

  const handleOnClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cartLogoContainer" onClick={handleOnClick}>
      <img src="src/assets/CartLogo/shopping-cart.png" />
    </div>
  );
}

export { CartLogo };
