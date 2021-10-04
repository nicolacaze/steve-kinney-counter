import React from "react";
import reactDOM from "react-dom";

import Counter from "./Counter";

const Application = () => {
  return (
    <main className="app">
      <Counter max={15} step={5} />
    </main>
  );
};

reactDOM.render(<Application />, document.getElementById("root"));
