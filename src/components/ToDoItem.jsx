import React, { useState } from "react";

const Todo = (props) => {
  const [isClicked, setClicked] = useState(false);
  function handleClick() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default Todo;
