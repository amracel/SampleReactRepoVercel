
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [lastPressed, setLastPressed] = useState(null);
  const handleClick = (label) => {
    setLastPressed(label);
    if(label === "Two") {
      setCount(count + 2);
    } else {
      setCount(count + 1);
    }
  };
  return (
    /*
    <div>
      <h3>Last Pressed: {lastPressed}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => {
          setLastPressed("One");
          setCount((prevCount) => prevCount + 1);
        }}>One</button>
      <button onClick={() => {
          setLastPressed("Two");
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}>Two</button>
    </div>
    */
    <div>
    <h3>Last Pressed: {lastPressed}</h3>
    <h4>Count: {count}</h4>
    <button onClick={() => handleClick('One')}>One</button>
      <button onClick={() => handleClick('Two')}>Two</button>
  </div>
  );
}

export default App;
