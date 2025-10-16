import React from "react";
import Counter from "./counter";
import "./counter.css";

const Counters = ({
  counters,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div>
      <div className="counter-container">
        <button className="btn btn-reset" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Counters;
