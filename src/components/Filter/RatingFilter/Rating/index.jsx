import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

import "./Rating.css";

function Rating({ rate }) {
  const productStars = Math.round(rate);
  const maxStars = Array.from({ length: 5 }, (_, idx) => idx + 1);

  return (
    <div className="RatingContainer">
      {maxStars.map((starIndex, index) =>
        productStars >= starIndex ? (
            <AiFillStar data-testid="graphicsFilled" className="StarFilled" key={index} />
        ) : (
            <AiOutlineStar data-testid="graphicsNotFilled" className="StarNotFilled" key={index} />
        )
      )}
      <h3>& up</h3>
    </div>
  );
}

export { Rating };
