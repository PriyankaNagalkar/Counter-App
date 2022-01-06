import React, { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState("");

  const increment = () => {
    setCount(count + 1 >= 100 ? 100 : count + 1);
    setMessage(count >= 100 ? "Value can't greater than 100" : `Your current value of count is ${count}`);
  };

  const decrement = () => {
    setCount(count <= 0 ? 0 : count - 1);
    setMessage(count<=0? "Value can't be less than 0":`Your current value of count is ${count}`);
  }

  const reset = () => {
    setCount(0);
    setMessage("")
  }

return (
      <div className="container">
      <h1 className="heading">Welcome to My Counter</h1>
      <div className="App">
      {/* <h1>Hello</h1> */}
      <header>
        {/* <h1 className="heading">Welcome to My Counter</h1> */}
      </header>
      <h2>{message}</h2>
      <button onClick={increment}>Increase Value</button>
      <button onClick={decrement}>Decrease Value</button>
      <button onClick={reset}>Reset Value</button>
      </div>
      </div>
  );
}

export default App;