import React, { useContext, useState, useEffect } from 'react'
import { subtopicContext } from "../Root/Root";
import ReactMarkdown from "react-markdown";
import { ArrowUpOutlined, ArrowDownOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import classes from "./Markdown.module.css";
// import editorContext from "./editorContext";
import "katex/dist/katex.min.css";
import AddComponent from "../AddComponent/AddComponent";
import 'mermaid/dist/mermaid.min.js';


const UP = -1
const DOWN = 1



export default function Markdown({ component, index }) {

    const {subtopic, changeSubtopic, handleMove, RemoveComponent, addComponent} = useContext(subtopicContext)


    const changeContent = (e) => {
        changeSubtopic(index, e.target.value)
    }
    const renderers = {
        inlineMath: ({ value }) => <InlineMath math={value} />,
        math: ({ value }) => <BlockMath math={value} />,
        code: ({ language, value }) => {
            if (value) {
                if (language == 'mermaid')
                    return <div className={language} children={value} />
                return <SyntaxHighlighter style={dark} language={language} children={value} />
            }
            return <div></div>
        }
    };
    return (
        <div className={classes.markdown}>
             <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button onClick={() => handleMove(index, UP)}><ArrowUpOutlined /></button>
                <button onClick={() => handleMove(index, DOWN)}><ArrowDownOutlined /></button>
                <button onClick={() => RemoveComponent(index)}><CloseCircleOutlined /></button>
            </div>
            <div className={classes.markdown__title}>Markdown Editor</div>
            <div className={classes.markdown__editor}>
                <div className={classes.markdown__input}>
                    <div className={classes.markdown__title}>Markdown Input</div>
                    <textarea
                        style={{ height: "200px" }}
                        className={classes.markdown__input__textArea}
                        value={component.content}
                        onChange={changeContent}></textarea>
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
            <br></br><br></br>
            <AddComponent onAddComponent={addComponent} index={index} />
        </div>
    )
}
