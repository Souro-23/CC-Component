import React, { useContext, useState } from "react";
import { subtopicContext } from "../Root/Root";
import { Popover, Input, Button, Select, message, Row, Col, Spin } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MoreOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import IconClasses from "../MoreIcons.module.css";
import classes from "./QuizEditor.module.css";

const { TextArea } = Input;
const { Option } = Select;
const UP = -1;
const DOWN = 1;

export default function QuizEditor({ component, index }) {
  const {
    subtopic,
    changeSubtopic,
    handleMove,
    RemoveComponent,
    addComponent,
  } = useContext(subtopicContext);

  const [quizQuestions, setQuizQuestions] = useState(component.content);
  const [explanation, setExplanation] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const saveQuiz = () => {
    if (checkQuestionCriteria()) {
      changeSubtopic(index, quizQuestions, "quiz");
      message.success("Quiz Saved");
    }
  };

  const onQuestionChange = (e) => {
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].question = e.target.value;
    setQuizQuestions(newArr);
  };

  const onOptionChange = (e, index) => {
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].options[index].content = e.target.value;
    setQuizQuestions(newArr);
  };

  const markCorrect = (index, value) => {
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].options[index].isCorrect = !value;
    setQuizQuestions(newArr);
  };

  const addOption = () => {
    var len = quizQuestions[currentQuestionIndex].options.length;
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].options.push({
      index: len,
      content: "",
      isCorrect: false,
    });
    setQuizQuestions(newArr);
  };

  const removeOption = (index) => {
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].options.splice(index, 1);
    setQuizQuestions(newArr);
  };

  const uploadImage = (e) => {
    var fileObj = e.target.files[0];
    setImageUploading(true);
    setTimeout(() => {
      createImageUrl(fileObj);
    }, 3000);
  };

  const createImageUrl = (fileObj) => {
    let url = URL.createObjectURL(fileObj);
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].image = url;
    setQuizQuestions(newArr);
    setImageUploading(false);
  };

  const removeFile = () => {
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].image = "";
    setQuizQuestions(newArr);
  };

  // checks the each question requirements
  const checkQuestionCriteria = () => {
    if (quizQuestions[currentQuestionIndex].question === "") {
      message.error("Question is required");
      return;
    }

    let len = quizQuestions[currentQuestionIndex].options.length;

    // For checking options are not empty
    for (let i = 0; i < len; i++) {
      if (quizQuestions[currentQuestionIndex].options[i].content === "") {
        message.error("Option required");
        return;
      }
    }

    // For checking question must have answer
    var flag = 0;
    for (let i = 0; i < len; i++) {
      if (quizQuestions[currentQuestionIndex].options[i].isCorrect === true) {
        flag = 1;
      }
    }
    if (flag === 0) {
      message.error("Select answer");
      return;
    }
    return true;
  };

  // const addQuestion = () => {
  //   if (checkQuestionCriteria()) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     var newArr = [...quizQuestions];
  //     newArr.push({
  //       question: "",
  //       options: [
  //         {
  //           index: 0,
  //           value: "",
  //           isCorrect: false,
  //         },
  //         {
  //           index: 1,
  //           value: "",
  //           isCorrect: false,
  //         },
  //       ],
  //     });
  //     setQuizQuestions(newArr);
  //   }
  // };

  const chooseQuestionType = (value) => {
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].type = value;
    setQuizQuestions(newArr);
  };

  const changeExplanation = (e) => {
    var newArr = [...quizQuestions];
    newArr[currentQuestionIndex].answer = e.target.value;
    setQuizQuestions(newArr);
  };

  const duplicateQuiz = () => {
    addComponent(index, "quiz", quizQuestions);
  };

  const toggleExplanation = (value) => {
    if (value) {
      setExplanation(true);
    } else {
      var newArr = [...quizQuestions];
      newArr[currentQuestionIndex].answer = "";
      setQuizQuestions(newArr);
      setExplanation(false);
    }
  };

  const content = (
    <div className={IconClasses.moreIcons}>
      <ArrowUpOutlined
        onClick={() => handleMove(index, UP)}
        className={IconClasses.moreIcon}
      />
      <CloseCircleOutlined
        onClick={() => RemoveComponent(index)}
        className={IconClasses.moreIcon}
      />
      <ArrowDownOutlined
        onClick={() => handleMove(index, DOWN)}
        className={IconClasses.moreIcon}
      />
    </div>
  );

  const { image, answer, options, question, type } = quizQuestions[
    currentQuestionIndex
  ];
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#fafafa",
        borderRadius: "10px",
      }}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Popover placement='bottomRight' content={content} trigger='hover'>
          <MoreOutlined className={IconClasses.more} />
        </Popover>
      </div>
      <div>
        <Row gutter={[8]} justify='center' className={classes.row}>
          <Col lg={15}>
            <TextArea
              value={question}
              onChange={onQuestionChange}
              className={classes.quizTextArea}
              placeholder='Question'
              autoSize={{ minRows: 1 }}
            />
          </Col>
          <Col lg={2}>
            <label htmlFor='quizImages'>
              <ion-icon name='image-outline'></ion-icon>
            </label>
            <input
              id='quizImages'
              type='file'
              name='quizImage'
              multiple={false}
              accept='image/*'
              hidden
              onChange={uploadImage}
            />
          </Col>
          <Col lg={6}>
            <Select onChange={chooseQuestionType} defaultValue={type}>
              <Option value={0}>Single Choice</Option>
              <Option value={1}>Multi Choice</Option>
            </Select>
          </Col>
          <Col lg={1}>
            <Popover
              placement='right'
              content='Markdown Supported'
              trigger='hover'>
              <InfoCircleOutlined style={{ fontSize: "20px", color: "grey" }} />
            </Popover>
          </Col>
        </Row>
        {imageUploading ? (
          <div key={index} className={classes.loading}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
          </div>
        ) : image !== "" ? (
          <div key={index} className={classes.imageDisplayContaner}>
            <CloseCircleOutlined
              style={{ color: "grey" }}
              className={classes.cancelicon}
              onClick={() => removeFile(image)}
            />
            <img className={classes.selectedImage} src={image} />
          </div>
        ) : null}
        {options.map((option, index) => (
          <div className={classes.optionBlock} key={index}>
            <Row gutter={[8]} justify='center' className={classes.row}>
              <Col lg={1}>
                {type === 0 ? (
                  <ion-icon
                    name={
                      option.isCorrect ? "radio-button-on" : "radio-button-off"
                    }
                    onClick={() => markCorrect(index, option.isCorrect)}
                    style={{ color: "#6c63ff" }}></ion-icon>
                ) : (
                  <ion-icon
                    name={option.isCorrect ? "square" : "square-outline"}
                    onClick={() => markCorrect(index, option.isCorrect)}
                    style={{ color: "#6c63ff" }}></ion-icon>
                )}
              </Col>
              <Col lg={22}>
                <Input
                  className={classes.quizInput}
                  placeholder='Option'
                  value={option.value}
                  maxLength={100}
                  onChange={(e) => onOptionChange(e, option.index)}
                />
              </Col>
              <Col lg={1}>
                {options.length !== 1 ? (
                  <ion-icon
                    name='close'
                    onClick={() => removeOption(index)}></ion-icon>
                ) : null}
              </Col>
            </Row>
          </div>
        ))}
        <Row gutter={[8]} className={classes.row} justify='center'>
          <Col lg={1}>
            {type === 0 ? (
              <ion-icon name='radio-button-off'></ion-icon>
            ) : (
              <ion-icon name='square-outline'></ion-icon>
            )}
          </Col>
          <Col lg={23} onClick={addOption} style={{ cursor: "pointer" }}>
            Add Option +
          </Col>
        </Row>
        <Row justify='center' gutter={[8]} className={classes.row}>
          {explanation ? (
            <>
              <Col lg={1}>
                <ion-icon
                  name='clipboard'
                  style={{ color: "#6c63ff" }}
                  onClick={() => toggleExplanation(false)}></ion-icon>
              </Col>
              <Col lg={22}>
                <TextArea
                  value={answer}
                  onChange={changeExplanation}
                  placeholder='Explanation'
                  autoSize={{ minRows: 1 }}
                />
              </Col>
            </>
          ) : (
            <>
              <Col lg={1}>
                <ion-icon
                  name='clipboard-outline'
                  style={{ color: "#6c63ff" }}
                  onClick={() => toggleExplanation(true)}></ion-icon>
              </Col>
              <Col lg={22}>
                <p
                  style={{ color: "#6c63ff", cursor: "pointer" }}
                  onClick={() => toggleExplanation(true)}>
                  Add Explanation
                </p>
              </Col>
            </>
          )}
          <Col lg={1}>
            <ion-icon name='copy-outline' onClick={duplicateQuiz}></ion-icon>
          </Col>
        </Row>
        <Button
          block
          style={{
            background: "#6c63ff",
            color: "white",
            borderRadius: "5px",
          }}
          onClick={saveQuiz}>
          Save
        </Button>
      </div>
    </div>
  );
}
