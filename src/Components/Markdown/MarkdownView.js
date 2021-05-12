import React from "react";
import classes from "./Markdown.module.css";
import CCMarkdownComponent from "../CCMarkdown/CCMarkdownComponent";

export default function MarkdownView({ component }) {
  return (
    <div className={classes.markdownView}>
      <CCMarkdownComponent children={component.content} />
    </div>
  );
}
