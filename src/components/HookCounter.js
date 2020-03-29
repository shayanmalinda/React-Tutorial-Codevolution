import React, { Component, useState } from "react";

const HookCounter = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevState => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialState)}>Reset</button>
    </div>
  );
};

export default HookCounter;
