import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Counter = ({ max, step }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <div className="counter__scoring">
        <button className="counter__button" onClick={decrement}>
          Decrement
        </button>
        <span className="counter__count">{count}</span>
        <button className="counter__button" onClick={increment}>
          Increment
        </button>
      </div>
      <div className="counter__reset">
        <button className="counter__button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  max: PropTypes.number,
  step: PropTypes.number,
};

export default Counter;
