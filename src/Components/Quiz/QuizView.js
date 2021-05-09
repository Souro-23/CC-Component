import { Button, message, Popover } from "antd";
import React, { useState } from "react";
import classes from "./QuizView.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import gfm from "remark-gfm";
import "katex/dist/katex.min.css";
import "mermaid/dist/mermaid.min.js";

const QuizView = ({ component, index }) => {
  const [yourAns, setYourAns] = useState([-1]);
  const [showAns, setShowAns] = useState(false);
  const { question, image, type, options, answer } = component.content[0];

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
          />
        );
      }
      return <div></div>;
    },
  };

  const selectYourAns = (value) => {
    if (type) {
      let arr = [...yourAns];
      if (arr.includes(value)) {
        let ind = arr.indexOf(value);
        arr.splice(ind, 1);
        setYourAns(arr);
        return;
      }
      arr.push(value);
      setYourAns(arr);
      return;
    }
    let arr = [value];
    setYourAns(arr);
  };

  const resetQuiz = () => {
    setShowAns(false);
    setYourAns([-1]);
  };

  const submitQuiz = () => {
    let flag = 0;
    options.forEach((option, index) => {
      if (type && yourAns.length > 1) {
        flag = 1;
        return;
      } else if (yourAns[0] !== -1) {
        flag = 1;
        return;
      }
    });
    if (flag) {
      setShowAns(true);
      return;
    }
    message.error("Select an option");
  };
  return (
    <div className={classes.quizViewCard}>
      <div className={classes.quizHeader}>
        <div className={classes.headerText}>
          <p style={{ fontSize: "18px" }}>
            <strong>Course Quiz</strong>
          </p>
        </div>
        <Popover placement='rightBottom' content={"Bookmark Coming Soon"}>
          <ion-icon
            name='bookmark-outline'
            style={{ color: "#6c63ff" }}></ion-icon>
        </Popover>
      </div>
      <div className={classes.quizQuesOptionContainer}>
        <div className={classes.quizViewQuestion}>{question}</div>
        {image !== "" ? (
          <div>
            <img src={image} alt='Quiz Image' className={classes.quizImage} />
          </div>
        ) : null}
        {!showAns
          ? options.map((option, index) =>
              type === 0 ? (
                <div
                  className={
                    yourAns.includes(index)
                      ? classes.yourAnsBox
                      : classes.optionBox
                  }
                  onClick={() => selectYourAns(index)}>
                  <ion-icon
                    name={
                      yourAns.includes(index)
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    style={{ color: "#6c63ff" }}></ion-icon>
                  <div className={classes.optionText}>
                    <p>{option.content}</p>
                  </div>
                </div>
              ) : (
                <div
                  className={
                    yourAns.includes(index)
                      ? classes.yourAnsBox
                      : classes.optionBox
                  }
                  onClick={() => selectYourAns(index)}>
                  <ion-icon
                    name={yourAns.includes(index) ? "square" : "square-outline"}
                    style={{ color: "#6c63ff" }}></ion-icon>
                  <div className={classes.optionText}>
                    <p>{option.content}</p>
                  </div>
                </div>
              )
            )
          : // After Submitting Ans Section
            options.map((option, index) =>
              type === 0 ? (
                <div
                  className={
                    option.isCorrect
                      ? classes.correctAnsBox
                      : yourAns.includes(index)
                      ? classes.wrongAnsBox
                      : classes.afterOptionBox
                  }>
                  <ion-icon
                    name={
                      yourAns.includes(index)
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    style={
                      option.isCorrect
                        ? { color: "#39ff14" }
                        : yourAns.includes(index)
                        ? { color: "rgb(253, 92, 92)" }
                        : { color: "#6c63ff" }
                    }></ion-icon>
                  <div className={classes.optionText}>
                    <p>{option.content}</p>
                  </div>
                </div>
              ) : (
                <div
                  className={
                    option.isCorrect
                      ? classes.correctAnsBox
                      : yourAns.includes(index)
                      ? classes.wrongAnsBox
                      : classes.afterOptionBox
                  }
                  onClick={() => selectYourAns(index)}>
                  <ion-icon
                    name={yourAns.includes(index) ? "square" : "square-outline"}
                    style={
                      option.isCorrect
                        ? { color: "#39ff14" }
                        : yourAns.includes(index)
                        ? { color: "rgb(253, 92, 92)" }
                        : { color: "#6c63ff" }
                    }></ion-icon>
                  <div className={classes.optionText}>
                    <p>{option.content}</p>
                  </div>
                </div>
              )
            )}
        {showAns ? (
          <div className={classes.answerBox}>
            <h3>Solution:</h3>
            <p>{answer}</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={classes.quizButtons}>
        <Button onClick={resetQuiz}>Reset Quiz</Button>
        <Button onClick={submitQuiz}>Submit</Button>
      </div>
    </div>
  );
};

export default QuizView;
