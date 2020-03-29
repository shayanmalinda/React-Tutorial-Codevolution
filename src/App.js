import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ParentComponent from "./components/parentComponent";
import ListComponent from "./components/ListComponent";
import Form from "./components/form";
import Count from "./components/Count";
import HookCounter from "./components/HookCounter";
import HookForm from "./components/HookForm";
import HookList from "./components/HookList";
import HookDataFetch from "./components/HookDataFetch";

function App() {
  return (
    <div className="App">
      <HookDataFetch />
    </div>
  );
}

export default App;
