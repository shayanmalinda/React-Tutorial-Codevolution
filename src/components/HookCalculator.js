import React, { useEffect, useState, useRef } from "react";

const button = {
  fontSize: "40px",
  marginRight: "20px",
  marginTop: "40px",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px"
};

const textbox = {
  marginTop: "100px",
  fontSize: "50px",
  textAlign: "right"
};

function HookCalculator() {
  const inputRef = useRef(null);

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [op, setOp] = useState("");

  useEffect(() => {
    switch (op) {
      case "+":
        setValue(value1 + value2);
        break;
      case "-":
        setValue(value1 - value2);
        break;
      case "*":
        setValue(value1 * value2);
        break;
      case "/":
        setValue(value1 / value2);
        break;
      default:
        setValue(value);
        break;
    }
  }, [value2]);

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  function addition() {
    setValue1(value);
    setValue("");
    setOp("+");
  }
  function substraction() {
    setValue1(value);
    setValue("");
    setOp("-");
  }
  function multiplication() {
    setValue1(value);
    setValue("");
    setOp("*");
  }
  function division() {
    setValue1(value);
    setValue("");
    setOp("/");
  }
  function calculate() {
    setValue2(value);
  }

  return (
    <div>
      <input
        ref={inputRef}
        style={textbox}
        value={value}
        onChange={event => setValue(Number(event.target.value))}
      />
      <br />
      <button style={button} onClick={() => addition()}>
        +
      </button>
      <button style={button} onClick={() => substraction()}>
        -
      </button>
      <button style={button} onClick={() => multiplication()}>
        *
      </button>
      <button style={button} onClick={() => division()}>
        /
      </button>
      <button style={button} onClick={() => calculate()}>
        =
      </button>
    </div>
  );
}

export default HookCalculator;
