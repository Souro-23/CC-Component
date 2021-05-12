import React from "react";
import ReactMarkdown from "react-markdown";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "katex/dist/katex.min.css";
import "mermaid/dist/mermaid.min.js";

const CCMarkdownComponent = ({ children }) => {
  const renderers = {
    inlineMath: ({ value }) => <InlineMath math={value} />,
    math: ({ value }) => <BlockMath math={value} />,
    code: ({ language, value }) => {
      if (value) {
        if (language === "mermaid")
          return <div className={language} children={value} />;
        return (
          <SyntaxHighlighter
            style={nightOwl}
            language={language}
            children={value}
            showLineNumbers
          />
        );
      }
      return <div></div>;
    },
  };

  return (
    <div>
      <ReactMarkdown
        plugins={[gfm, math]}
        renderers={renderers}
        children={children}
      />
    </div>
  );
};

export default CCMarkdownComponent;
