import React, { useContext, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import AddComponent from "../AddComponent/AddComponent";
import { subtopicContext } from "../Root/Root";
import { Input, Row, Select, Col, Popover } from "antd";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import classes from "./CodeBlock.module.css";

export default function CodeBlockView({ component, index }) {
  return (
    <div>
      <div>
        <SyntaxHighlighter
          language={component.language}
          style={nightOwl}
          showLineNumbers>
          customStyle={{ borderRadius: "5px" }}
          {component.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
