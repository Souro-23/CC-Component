import React, { useContext, useState, useEffect } from "react";
import { subtopicContext } from "../Root/Root";
import { Popover } from 'antd'
import ReactMarkdown from "react-markdown";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MoreOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import classes from "./Markdown.module.css";
// import editorContext from "./editorContext";
import "katex/dist/katex.min.css";
import AddComponent from "../AddComponent/AddComponent";
import "mermaid/dist/mermaid.min.js";
import { Input } from "antd";
import IconClasses from '../MoreIcons.module.css'



const { TextArea } = Input;

const UP = -1;
const DOWN = 1;

export default function Markdown({ component, index }) {
  const {
    subtopic,
    changeSubtopic,
    handleMove,
    RemoveComponent,
    addComponent,
  } = useContext(subtopicContext);

  const changeContent = (e) => {
    changeSubtopic(index, e.target.value, "md");
  };
  const content = (
    <div className={IconClasses.moreIcons}>
      <ArrowUpOutlined onClick={() => handleMove(index, UP)} className={IconClasses.moreIcon} />
      <CloseCircleOutlined onClick={() => RemoveComponent(index)} className={IconClasses.moreIcon} />
      <ArrowDownOutlined onClick={() => handleMove(index, DOWN)} className={IconClasses.moreIcon} />
    </div>
  );
  const renderers = {
    inlineMath: ({ value }) => <InlineMath math={value} />,
    math: ({ value }) => <BlockMath math={value} />,
    code: ({ language, value }) => {
      if (value) {
        if (language === "mermaid")
          return <div className={language} children={value} />;
        return (
          <SyntaxHighlighter
            style={dark}
            language={language}
            children={value}
          />
        );
      }
      return <div></div>;
    },
  };
  return (
    <div className={classes.markdown}>
      <div style={{ display: 'flex', justifyContent: "end" }}>
        <Popover placement="bottomRight" content={content} trigger="hover">
          <MoreOutlined className={IconClasses.more} />
        </Popover>
      </div>
      <div className={classes.markdown__editor}>
        <div className={classes.markdown__input}>
          <div className={classes.markdown__title}>Markdown Input</div>
          <div className={classes.markdownInput}>
            <TextArea
              autoSize={{ minRows: 4 }}
              bordered={false}
              className={classes.markdown__input__textArea}
              value={component.content}
              onChange={changeContent}></TextArea>
          </div>

        </div>
        <div className={classes.markdown__output}>
          <div className={classes.markdown__title}>Converted Text</div>
          <div className={classes.markdown__reactMarkdown}>
            <ReactMarkdown
              plugins={[math]}
              renderers={renderers}
              children={component.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
