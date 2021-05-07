import React from 'react'
import MarkdownView from "../Markdown/MarkdownView";
import CkEditorView from "../CKEditor/CkEditorView";
import CodeBlockView from '../CodeBlock/CodeBlockView'
import ImageContainer from '../AddImage/ImageContainer' 
import VideoPlayerView from '../VideoPlayer/VideoPlayerView'

export default function SubtopicView({subtopic}) {
    return (
        <div>
            {subtopic.map((component, index) => {
        if (component.type === "md")
          return (
            <div key={index}>
              <MarkdownView component={component} index={index}  />
            </div>
          );
        if (component.type === "img")
          return (
            <div key={index}>
              <ImageContainer component={component} index={index} />
            </div>
          );
        if (component.type === "quiz")
          return (
            <div key={index}>
              Quiz
            </div>
          );
        if (component.type === "code")
          return (
            <div key={index}>
              <CodeBlockView component={component} index={index} />
            </div>
          );

        if (component.type === "ed")
          return (
            <div key={index}>
              <CkEditorView component={component} index={index} />
            </div>
          );

        if (component.type === "video")
          return (
            <div key={index}>
              <VideoPlayerView component={component} index={index} />
            </div>
          );
      })}
        </div>
    )
}
