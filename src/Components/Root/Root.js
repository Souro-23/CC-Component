import React, { useState } from "react";
import ImageSelector from "../AddImage/ImageSelector";
import CodeBlock from "../CodeBlock/CodeBlock";
import MarkdownEditor from "../Markdown/Markdown";
import QuizCreator from "../Quiz/QuizEditor";
import { Row, Col, Button } from "antd";
import CkEditor from "../CKEditor/CkEditor";
import AddComponent from "../AddComponent/AddComponent";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Editor from "./Editor";
import SubtopicView from "./SubtopicView";
import { Header } from "antd/lib/layout/layout";
import { Route } from "react-router";

export const subtopicContext = React.createContext();
const UP = -1;
const DOWN = 1;

export default function Root(props) {
  const [subtopic, setSubtopic] = useState(components);

  const changeSubtopic = (index, content, type) => {
    const newSubtopic = subtopic.map((component, Index) => {
      if (index === Index && (type === "md" || type === "ed"))
        return {
          type: type,
          content: content,
        };
      if (index === Index && type === "code")
        return {
          type: type,
          content: content,
          language: "javascript",
        };
      if (index === Index && type === "img")
        return {
          type: type,
          src: content.src,
          caption: content.caption,
          isbackground: content.isbackground,
        };

      if (index === Index && type === "video")
        return {
          type: type,
          src: content.src,
          caption: content.caption,
        };
      if (index === Index && type === "quiz")
        return {
          type: type,
          content: content,
        };
      return component;
    });
    setSubtopic([...newSubtopic]);
    console.log(newSubtopic);
  };

  const addComponent = (index, type) => {
    // to add a new component in the array
    let MDComponent = {
      type: "md",
      content: "# hello there",
    };
    let imageComponent = {
      type: "img",
      src: [],
      caption: "",
      isbackground: false,
    };
    let quizComponent = {
      type: "quiz",
      content: [
        {
          question: "",
          image: "",
          type: 0,
          options: [
            {
              index: 0,
              content: "",
              isCorrect: false,
            },
            {
              index: 1,
              content: "",
              isCorrect: false,
            },
          ],
          answer: "",
        },
      ],
    };
    let codeBlockComponent = {
      type: "code",
      content: "",
      language: "",
    };
    let videoComponent = {
      type: "video",
      src: "",
      caption: "",
    };
    let edComponent = {
      type: "ed",
      content: "welcome to CKEditor",
    };
    let newSubtopic = subtopic;
    if (type === "md") newSubtopic.splice(index + 1, 0, MDComponent);
    if (type === "img") newSubtopic.splice(index + 1, 0, imageComponent);
    if (type === "quiz") newSubtopic.splice(index + 1, 0, quizComponent);
    if (type === "code") newSubtopic.splice(index + 1, 0, codeBlockComponent);
    if (type === "video") newSubtopic.splice(index + 1, 0, videoComponent);
    if (type === "ed") newSubtopic.splice(index + 1, 0, edComponent);
    setSubtopic([...newSubtopic]);
  };
  const handleMove = (position, direction) => {
    if (position < 0) throw new Error("Given item not found.");
    else if (
      (direction === UP && position === 0) ||
      (direction === DOWN && position === subtopic.length - 1)
    )
      return; // canot move outside of array
    const component = subtopic[position];
    let newSubtopic = subtopic.filter((item, index) => index !== position);
    newSubtopic.splice(position + direction, 0, component);

    console.log(newSubtopic);
    setSubtopic(newSubtopic);
  };
  const RemoveComponent = (position) => {
    let newSubtopic = subtopic.filter((item, index) => index !== position);
    setSubtopic([...newSubtopic]);
    console.log(newSubtopic);
  };

  return (
    <subtopicContext.Provider
      value={{
        subtopic,
        changeSubtopic,
        addComponent,
        handleMove,
        RemoveComponent,
      }}>
      <Header >
        <Button onClick={() => props.history.push("/view")}>
          SEE
          </Button>
      </Header>
      <br/><br/>
      <Route path='/view' render={() => <SubtopicView subtopic={subtopic} addComponent={addComponent} />} />
      <Route exact path="/" render={() => <Editor subtopic={subtopic} addComponent={addComponent} />} />
      
    </subtopicContext.Provider>
  );
}

var components = [
  {
    type: "ed",
    content: "welcome to CKEditor",
  },
  {
    type: "quiz",
    content: [
      {
        question: "",
        image: "",
        type: 0,
        options: [
          {
            index: 0,
            content: "",
            isCorrect: false,
          },
          {
            index: 1,
            content: "",
            isCorrect: false,
          },
        ],
        answer: "",
      },
    ],
  },
];
