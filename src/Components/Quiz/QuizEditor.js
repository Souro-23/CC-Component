import React, { useContext, useState } from "react";
import { subtopicContext } from "../Root/Root";
import {
  Popover,
  Input,
  Select,
  message,
  Row,
  Col,
  Spin,
  Divider,
  Tooltip,
} from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MoreOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import IconClasses from "../MoreIcons.module.css";
import classes from "./QuizEditor.module.css";

const { TextArea } = Input;
const { Option } = Select;
const UP = -1;
const DOWN = 1;

export default function QuizEditor({ component, index }) {
  const { changeSubtopic, handleMove, RemoveComponent, addComponent } =
    useContext(subtopicContext);

  const [explanation, setExplanation] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { question, image, type, options, answer } =
    component.content[currentQuestionIndex];
  const { content } = component;

  const onQuestionChange = (e) => {
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          question: e.target.value,
        },
      ],
      "quiz"
    );
  };

  const onOptionChange = (e, optionIndex) => {
    var newArr = options;
    newArr[optionIndex].content = e.target.value;
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          options: [...newArr],
        },
      ],
      "quiz"
    );
  };

  const markCorrect = (optionIndex, value, type) => {
    var newArr = options;
    if (type === 0) {
      newArr.forEach((option, Index) => {
        if (optionIndex === Index) {
          option.isCorrect = !value;
        } else {
          option.isCorrect = value;
        }
      });
    } else {
      newArr[optionIndex].isCorrect = !value;
    }

    changeSubtopic(
      index,
      [
        {
          ...content[0],
          options: newArr,
        },
      ],
      "quiz"
    );
  };

  const addOption = () => {
    var len = options.length;
    var newArr = options;
    newArr.push({
      index: len,
      content: "",
      isCorrect: false,
    });
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          options: newArr,
        },
      ],
      "quiz"
    );
  };

  const removeOption = (optionIndex) => {
    var newArr = options;
    newArr.splice(optionIndex, 1);
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          options: newArr,
        },
      ],
      "quiz"
    );
  };

  const uploadImage = (e) => {
    var fileObj = e.target.files[0];
    setImageUploading(true);
    setTimeout(() => {
      createImageUrl(fileObj);
      e.target.value = "";
    }, 3000);
  };

  const createImageUrl = (fileObj) => {
    let url = URL.createObjectURL(fileObj);
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          image: url,
        },
      ],
      "quiz"
    );
    setImageUploading(false);
  };

  const removeFile = () => {
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          image: "",
        },
      ],
      "quiz"
    );
  };

  // checks the each question requirements
  const checkQuestionCriteria = () => {
    if (question === "") {
      message.error("Question is required");
      return;
    }

    let len = options.length;

    // For checking options are not empty
    for (let i = 0; i < len; i++) {
      if (options[i].content === "") {
        message.error("Option required");
        return;
      }
    }

    // For checking question must have answer
    var flag = 0;
    for (let i = 0; i < len; i++) {
      if (options[i].isCorrect === true) {
        flag = 1;
      }
    }
    if (flag === 0) {
      message.error("Select answer");
      return;
    }
    return true;
  };

  const chooseQuestionType = (value) => {
    var newArr = options;
    if (value === 0) {
      options.forEach((option, index) => (option.isCorrect = false));
    }
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          type: value,
          options: newArr,
        },
      ],
      "quiz"
    );
  };

  const changeExplanation = (e) => {
    changeSubtopic(
      index,
      [
        {
          ...content[0],
          answer: e.target.value,
        },
      ],
      "quiz"
    );
  };

  const duplicateQuiz = () => {
    //TODO
    addComponent(index, "quiz", content);
  };

  const toggleExplanation = (value) => {
    if (value) {
      setExplanation(true);
    } else {
      changeSubtopic(
        index,
        [
          {
            ...content[0],
            answer: "",
          },
        ],
        "quiz"
      );
      setExplanation(false);
    }
  };

  const iconContent = (
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

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#fafafa",
        borderRadius: "10px",
      }}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Popover placement='bottomRight' content={iconContent} trigger='hover'>
          <MoreOutlined className={IconClasses.more} />
        </Popover>
      </div>
      <div>
        <Row gutter={[8]} className={classes.row} justify='center'>
          <Col lg={15} md={15} sm={15} xs={15}>
            <TextArea
              value={question}
              onChange={onQuestionChange}
              className={classes.quizTextArea}
              placeholder='Question'
              autoSize={{ minRows: 1 }}
            />
          </Col>
          <Col lg={2} md={2} sm={2} xs={2} className={classes.rowImageIcon}>
            <label htmlFor={`quizImage + ${index}`}>
              <div className={classes.iconBackground}>
                <ion-icon name='image-outline'></ion-icon>
              </div>
            </label>
            <input
              id={`quizImage + ${index}`}
              type='file'
              name={`quizImage + ${index}`}
              multiple={false}
              accept='image/*'
              hidden
              onChange={uploadImage}
            />
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <Select
              onChange={chooseQuestionType}
              defaultValue={type}
              style={{ width: "100%" }}>
              <Option value={0}>Single Choice</Option>
              <Option value={1}>Multi Choice</Option>
            </Select>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1} className={classes.rowInfoButton}>
            <Tooltip title={"Markdown Supported"}>
              <ion-icon name='alert-circle-outline'></ion-icon>
            </Tooltip>
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            {imageUploading ? (
              <div key={index} className={classes.loading}>
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
                />
              </div>
            ) : image !== "" ? (
              <div key={index} className={classes.imageDisplayContaner}>
                <CloseCircleOutlined
                  style={{ color: "grey" }}
                  className={classes.cancelicon}
                  onClick={removeFile}
                />
                <img className={classes.selectedImage} src={image} alt='' />
              </div>
            ) : null}
          </Col>
        </Row>
        {options.map((option, Index) => (
          <div className={classes.optionBlock} key={`${index} + ${Index}`}>
            <Row
              gutter={[8]}
              justify='center'
              className={classes.row}
              key={`${index} + ${Index}`}>
              <Col
                lg={1}
                md={2}
                sm={2}
                xs={2}
                className={classes.rowOptionIcon}>
                {type === 0 ? (
                  <ion-icon
                    name={
                      option.isCorrect ? "radio-button-on" : "radio-button-off"
                    }
                    onClick={() => markCorrect(Index, option.isCorrect, type)}
                    style={{ color: "#6c63ff" }}></ion-icon>
                ) : (
                  <ion-icon
                    name={option.isCorrect ? "square" : "square-outline"}
                    onClick={() => markCorrect(Index, option.isCorrect, type)}
                    style={{ color: "#6c63ff" }}></ion-icon>
                )}
              </Col>
              <Col lg={22} md={20} sm={20} xs={20} key={`${index} + ${Index}`}>
                <Input
                  key={`${index} + ${Index}`}
                  className={classes.quizInput}
                  placeholder='Option'
                  value={option.content}
                  maxLength={100}
                  onChange={(e) => onOptionChange(e, option.index)}
                />
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className={classes.rowCrossIcon}>
                {options.length !== 1 ? (
                  <ion-icon
                    name='close'
                    onClick={() => removeOption(Index)}></ion-icon>
                ) : null}
              </Col>
            </Row>
          </div>
        ))}
        <Row gutter={[8]} className={classes.row} justify='center'>
          <Col lg={1} md={2} sm={2} xs={2} className={classes.rowOptionIcon}>
            {type === 0 ? (
              <ion-icon name='radio-button-off'></ion-icon>
            ) : (
              <ion-icon name='square-outline'></ion-icon>
            )}
          </Col>
          <Col
            lg={23}
            md={22}
            sm={22}
            xs={22}
            onClick={addOption}
            style={{ cursor: "pointer", padding: "3px 10px" }}>
            Add Option +
          </Col>
        </Row>
        <Divider style={{ marginBottom: "10px", marginTop: "5px" }} />
        <Row justify='center' gutter={[8]} className={classes.row}>
          {explanation || answer ? (
            <>
              <Col
                lg={1}
                md={2}
                sm={2}
                xs={2}
                className={classes.rowExplanationIcon}>
                <ion-icon
                  name='clipboard'
                  style={{ color: "#6c63ff" }}
                  onClick={() => toggleExplanation(false)}></ion-icon>
              </Col>
              <Col lg={22} md={20} sm={20} xs={20}>
                <TextArea
                  value={answer}
                  onChange={changeExplanation}
                  placeholder='Explanation'
                  autoSize={{ minRows: 1 }}
                  className={classes.explanationTextArea}
                />
              </Col>
            </>
          ) : (
            <>
              <Col
                lg={1}
                md={2}
                sm={2}
                xs={2}
                className={classes.rowExplanationIcon}>
                <ion-icon
                  name='clipboard-outline'
                  style={{ color: "#6c63ff" }}
                  onClick={() => toggleExplanation(true)}></ion-icon>
              </Col>
              <Col
                lg={22}
                md={20}
                sm={20}
                xs={20}
                className={classes.rowAddExplanation}>
                <p
                  style={{
                    color: "#6c63ff",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleExplanation(true)}>
                  Add Explanation
                </p>
              </Col>
            </>
          )}
          <Col lg={1} md={2} sm={2} xs={2} className={classes.rowCopyIcon}>
            <ion-icon name='copy-outline' onClick={duplicateQuiz}></ion-icon>
          </Col>
        </Row>
      </div>
    </div>
  );
}
