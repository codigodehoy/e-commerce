import { useContext } from "react";
import "./TypeFilter.css";

import { SearchContext } from "../../../contexts/SearchContext";

function TypeFilter({ name, options }) {
  const { filtersByCategory, setFiltersByCategory } = useContext(SearchContext);


  const handleOnclick = (event) => {
    const { name, checked } = event.target;
    const category = name.toLowerCase();

    if (checked) {
      setFiltersByCategory([...filtersByCategory, category]);
    }

    if (!checked) {
      const deleteFilter = filtersByCategory.filter((filter) => filter !== category);
      setFiltersByCategory([...deleteFilter]);
    }
  };

  return (
    <div className="TypeFilterContainer">
      <h2>{name}:</h2>
      {options.map((option, id) => (
        <div key={id} className="CheckBox">
          <input
            type="checkbox"
            id={option.id}
            name={option.label}
            onClick={handleOnclick}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export { TypeFilter };
