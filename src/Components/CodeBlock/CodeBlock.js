import React, { useContext, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import AddComponent from "../AddComponent/AddComponent";
import { subtopicContext } from "../Root/Root";
import { Input, Row, Select, Col } from "antd";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import classes from "./CodeBlock.module.css";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { programmingLanguages } from "./languageOptions";
const { TextArea } = Input;

const UP = -1;
const DOWN = 1;

export default function CodeBlock({ component, index }) {
  // const codeString = 'print("Hello World")';

  const {
    subtopic,
    changeSubtopic,
    handleMove,
    RemoveComponent,
    addComponent,
  } = useContext(subtopicContext);

  const [language, setLanguage] = useState("");
  const changeContent = (e) => {
    changeSubtopic(index, e.target.value, "codeBlock");
  };

  const chooseLanguage = (value) => {
    setLanguage(value);
  };

  return (
    <div className={classes.codeBlock}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button onClick={() => handleMove(index, UP)}>
          <ArrowUpOutlined />
        </button>
        <button onClick={() => handleMove(index, DOWN)}>
          <ArrowDownOutlined />
        </button>
        <button onClick={() => RemoveComponent(index)}>
          <CloseCircleOutlined />
        </button>
      </div>

      <div className={classes.codeBlock__editor}>
        <div className={classes.codeBlock__input}>
          <div className={classes.codeBlock__title}>Code Input</div>
          <div>
            <Input.Group compact className={classes.quizCorrectButton}>
              <Select
                onChange={chooseLanguage}
                defaultValue='Choose Language'
                style={{ width: "50%" }}>
                {programmingLanguages.map((lang, index) => (
                  <option key={index} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>
            </Input.Group>
          </div>
          <TextArea
            autoSize={{ minRows: 6 }}
            bordered={false}
            className={classes.codeBlock__input__textArea}
            value={component.content}
            onChange={changeContent}></TextArea>
        </div>
        <div className={classes.codeBlock__output}>
          <div className={classes.codeBlock__title}>Code Output</div>
          <div className={classes.codeBlock__reactcodeBlock}>
            <SyntaxHighlighter
              language={language}
              style={nightOwl}
              showLineNumbers
              wrapLines={true}
              // wrapLongLines={true}
            >
              {component.content}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <AddComponent onAddComponent={addComponent} index={index} />
    </div>
  );
}
