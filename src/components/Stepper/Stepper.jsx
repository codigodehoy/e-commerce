import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import { Button } from "../Button";
import "./Stepper.css";

function Stepper({ onAddItem, onRemoveItem, numberItems = 1 }) {
  const activeClass = numberItems > 1 && "Active";

  return (
    <div className="StepperContainer">
      <div>
        <Button onClick={onRemoveItem} hasIcon={true}>
          <CiCircleMinus className={`MinusIcon ${activeClass}`} />
        </Button>
      </div>
      <div>{numberItems}</div>
      <div>
        <Button onClick={onAddItem} hasIcon={true}>
          <CiCirclePlus className="PlusIcon Active" />
        </Button>
      </div>
    </div>
  );
}
export { Stepper };
