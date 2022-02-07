import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(false);
  const [disabled1, setDisabled1] = useState(false);

  const increment = () => {
    setCount(count + 1 >= 10 ? 10 : count + 1);
    setMessage(
      count >= 10
        ? "Value can't greater than "
        : `Your current value of count is  `
    );
    if (count + 1 >= 10) {
      setDisable(true);
      setDisabled1(false);
    }
  };

  const decrement = () => {
    setCount(count <= 0 ? 0 : count - 1);
    setMessage(
      count <= 0
        ? "Value can't be less than "
        : `Your current value of count is `
    );
    if (count - 1 <= 0) {
      setDisabled1(true);
    }
    if (count - 1 <= 10) {
      setDisable(false);
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="container">
//       <h1 className="heading">Welcome to My Counter</h1>
    <marquee className="heading" direction="left" height="50px" width="350px" scrollamount="5">Welcome to My Counter..</marquee>
      <div className="App">
        <h2>
          {message} {count}
        </h2>
        <button onClick={increment}>Increase Value</button>
        <button onClick={decrement}>Decrease Value</button>
        <button onClick={reset}>Reset Value</button>
      </div>
    </div>
  );
}

export default App;
