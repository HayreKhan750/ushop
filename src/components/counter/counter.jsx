import React from "react";
import "./counter.css";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  return (
    <>
      <div className="counter-buttons">
        <h1 className="btn btn-secondary">{counter.value}</h1>
        <button
          className="btn btn-primary"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onDecrement(counter)}
        >
          -
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(counter.id)}>
          X
        </button>
      </div>
    </>
  );
};

export default Counter;
