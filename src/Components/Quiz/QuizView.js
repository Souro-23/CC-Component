import { Button, message, Popover } from "antd";
import React, { useState } from "react";
import classes from "./QuizView.module.css";
import ImageContainer from "../AddImage/ImageContainer";
import CCMarkdownComponent from "../CCMarkdown/CCMarkdownComponent";

const QuizView = ({ component, index }) => {
  const [yourAns, setYourAns] = useState([-1]);
  const [showAns, setShowAns] = useState(false);
  const { question, image, type, options, answer } = component.content[0];

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
        <div className={classes.quizViewQuestion}>
          <CCMarkdownComponent children={question} />
        </div>
        {image !== "" ? (
          <div>
            <ImageContainer
              src={image}
              alt='Quiz Image'
              isBackground={false}
              container={false}
            />
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
                    <CCMarkdownComponent children={option.content} />
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
                    <CCMarkdownComponent children={option.content} />
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
                      option.isCorrect
                        ? "checkmark-circle-outline"
                        : yourAns.includes(index)
                        ? "close-circle-outline"
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
                    <CCMarkdownComponent children={option.content} />
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
                    name={
                      option.isCorrect
                        ? "checkbox-outline"
                        : yourAns.includes(index)
                        ? "close-outline"
                        : "square-outline"
                    }
                    style={
                      option.isCorrect
                        ? { color: "#39ff14" }
                        : yourAns.includes(index)
                        ? { color: "rgb(253, 92, 92)" }
                        : { color: "#6c63ff" }
                    }></ion-icon>
                  <div className={classes.optionText}>
                    <CCMarkdownComponent children={option.content} />
                  </div>
                </div>
              )
            )}
        {showAns && answer !== "" ? (
          <div className={classes.answerBox}>
            <h3>Solution:</h3>
            <p>
              <CCMarkdownComponent children={answer} />
            </p>
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
