import React, { useState } from "react";
import Header from "./Header";
import Todo from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);
  function handleChange(event) {
    let newvalue = event.target.value;
    setInputText(newvalue);
  }
  function handleClick() {
    setItem((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <Header />
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <Todo text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
