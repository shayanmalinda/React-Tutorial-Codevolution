import React, { Component, useState } from "react";

const HookList = () => {
  const [names, setItems] = useState([]);
  const [name, setName] = useState("");

  const addItems = event => {
    // event.preventDefault();
    setName("");
    setItems([
      ...names,
      {
        id: names.length,
        value: name
      }
    ]);
  };

  const reset = () => {
    setItems([]);
  };

  return (
    <div>
      {/* <form onSubmit={addItems}> */}
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addItems}>Submit</button>
      <button onClick={reset}>Reset</button>
      {/* </form> */}

      <ul>
        {names.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookList;
