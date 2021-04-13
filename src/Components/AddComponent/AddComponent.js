import React from "react";
import classes from "./AddComponent.module.css";

const AddComponent = ({ onAddComponent, index }) => {
  return (
    <div class={classes.hoverMenu}>
      <button class={classes.hoverMenu__Btn}>+</button>
      <div class={classes.hoverMenu__Content}>
        <a onClick={() => onAddComponent(index, "md")}>Markdown</a>
        <a onClick={() => onAddComponent(index, "image")}>Image</a>
        <a onClick={() => onAddComponent(index, "quiz")}>Quiz</a>
        <a onClick={() => onAddComponent(index, "codeBlock")}>Code Block</a>
      </div>
    </div>
  );
};

export default AddComponent;
