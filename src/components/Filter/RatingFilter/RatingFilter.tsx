import React, { useContext } from "react";

import { Rating } from "@mui/material";

import { SearchContext } from "../../../contexts/SearchContext";
import "./RatingFilter.css";

function RatingFilter() {
  const { rating, setRating } = useContext(SearchContext);

  const handleOnClick = (_, newValue) => {
    setRating(newValue);
  };

  return (
    <div className="RatingFilterContainer">
      <h2>Rates:</h2>
      <div className="RatingsContainer">
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={handleOnClick}
        />
        <span className="RatingText">& Up</span>
      </div>
    </div>
  );
}

export { RatingFilter };
