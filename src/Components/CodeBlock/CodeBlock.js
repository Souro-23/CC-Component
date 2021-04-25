import React, { useContext, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import AddComponent from "../AddComponent/AddComponent";
import { subtopicContext } from "../Root/Root";
import { Input, Row, Select, Col, Popover } from "antd";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import classes from "./CodeBlock.module.css";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { programmingLanguages } from "./languageOptions";
import IconClasses from '../MoreIcons.module.css'


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
    console.log(e.target.value)
    changeSubtopic(index, e.target.value, "code");
  };
  const content = (
    <div className={IconClasses.moreIcons}>
      <ArrowUpOutlined onClick={() => handleMove(index, UP)} className={IconClasses.moreIcon} />
      <CloseCircleOutlined onClick={() => RemoveComponent(index)} className={IconClasses.moreIcon} />
      <ArrowDownOutlined onClick={() => handleMove(index, DOWN)} className={IconClasses.moreIcon} />
    </div>
  );

  const chooseLanguage = (value) => {
    setLanguage(value);
  };
   

  return (
    <div className={classes.codeBlock}>
      <div style={{ display: 'flex', justifyContent: "end" }}>
        <Popover placement="bottomRight" content={content} trigger="hover">
          <MoreOutlined className={IconClasses.more} />
        </Popover>
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
            autoSize={{ minRows: 1 }}
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
<<<<<<< HEAD
              showLineNumbers
              wrapLines={true}
              // wrapLongLines={true}
            >
=======
              showLineNumbers>
>>>>>>> 3bdd116fa479b3d2ebe3b1fd02f8e7ea31653135
              {component.content}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

    </div>
  );
}
