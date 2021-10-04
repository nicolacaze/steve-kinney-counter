import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const getStateFromLocalStorage = () => {
  const counter = localStorage.getItem("counter");
  if (counter) return JSON.parse(counter);
  return { count: 0 };
};

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = getStateFromLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
  }

  updateDocumentTitle() {
    document.title = `Steve's counter is ${this.state.count}`;
  }

  increment() {
    this.setState(
      (state, props) => {
        const { max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
      },
      () => {
        localStorage.setItem("counter", JSON.stringify(this.state));
        this.updateDocumentTitle();
      }
    );
  }

  decrement() {
    this.setState({ count: this.state.count - 1 }, this.updateDocumentTitle);
  }

  reset() {
    this.setState({ count: 0 }, this.updateDocumentTitle);
  }

  render() {
    return (
      <div className="counter">
        <div className="counter__scoring">
          <button className="counter__button" onClick={this.decrement}>
            Decrement
          </button>
          <span className="counter__count">{this.state.count}</span>
          <button className="counter__button" onClick={this.increment}>
            Increment
          </button>
        </div>
        <div className="counter__reset">
          <button className="counter__button" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  max: PropTypes.number,
  step: PropTypes.number,
};

export default Counter;
