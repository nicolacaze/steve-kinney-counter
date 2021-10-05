import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./style.css";

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return Number(storage);
    return initialState;
  };
  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, "counter");
  const countRef = useRef();

  let message;
  if (countRef.current < count) message = "Higher";
  if (countRef.current > count) message = "Lower";
  countRef.current = count;

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Steve's counter is ${count}`;
  }, [count]);

  return (
    <div className="counter">
      <p>{message}</p>
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
