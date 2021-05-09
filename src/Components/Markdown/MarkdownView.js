import React from "react";
import { subtopicContext } from "../Root/Root";
import { Popover } from "antd";
import ReactMarkdown from "react-markdown";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import classes from "./Markdown.module.css";
// import editorContext from "./editorContext";
import "katex/dist/katex.min.css";
import "mermaid/dist/mermaid.min.js";

export default function MarkdownView({ component }) {
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
    <div className={classes.markdownView}>
      <ReactMarkdown
        plugins={[gfm, math]}
        renderers={renderers}
        children={component.content}
      />
    </div>
  );
}
