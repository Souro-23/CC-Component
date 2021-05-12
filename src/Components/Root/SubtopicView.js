import React from "react";
import MarkdownView from "../Markdown/MarkdownView";
import CkEditorView from "../CKEditor/CkEditorView";
import CodeBlockView from "../CodeBlock/CodeBlockView";
import ImageContainer from "../AddImage/ImageContainer";
import VideoPlayerView from "../VideoPlayer/VideoPlayerView";
import QuizView from "../Quiz/QuizView";

export default function SubtopicView({ subtopic }) {
  return (
    <div>
      {subtopic.map((component, index) => {
        if (component.type === "md")
          return (
            <MarkdownView key={index} component={component} index={index} />
          );
        if (component.type === "img")
          return (
            <ImageContainer
              key={index}
              src={component.src}
              caption={component.caption}
              isBackground={component.isBackground}
              index={index}
              container={true}
            />
          );
        if (component.type === "quiz")
          return <QuizView key={index} component={component} index={index} />;
        if (component.type === "code")
          return (
            <CodeBlockView key={index} component={component} index={index} />
          );

        if (component.type === "ed")
          return (
            <CkEditorView key={index} component={component} index={index} />
          );

        if (component.type === "video")
          return (
            <VideoPlayerView key={index} component={component} index={index} />
          );
      })}
    </div>
  );
}
