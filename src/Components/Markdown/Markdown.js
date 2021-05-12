import React, { useContext } from "react";
import { subtopicContext } from "../Root/Root";
import { Popover } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MoreOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import classes from "./Markdown.module.css";
import { Input } from "antd";
import IconClasses from "../MoreIcons.module.css";
import CCMarkdownComponent from "../CCMarkdown/CCMarkdownComponent";

const { TextArea } = Input;

const UP = -1;
const DOWN = 1;

export default function Markdown({ component, index }) {
  const {
    subtopic,
    changeSubtopic,
    handleMove,
    RemoveComponent,
    addComponent,
  } = useContext(subtopicContext);

  const changeContent = (e) => {
    changeSubtopic(index, e.target.value, "md");
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

  return (
    <div className={classes.markdown}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Popover placement='bottomRight' content={content} trigger='hover'>
          <MoreOutlined className={IconClasses.more} />
        </Popover>
      </div>
      <div className={classes.markdown__editor}>
        <div className={classes.markdown__input}>
          <div className={classes.markdown__title}>Markdown Input</div>
          <div className={classes.markdownInput}>
            <TextArea
              autoSize={{ minRows: 4 }}
              bordered={false}
              className={classes.markdown__input__textArea}
              value={component.content}
              onChange={changeContent}></TextArea>
          </div>
        </div>
        <div className={classes.markdown__output}>
          <div className={classes.markdown__title}>Converted Text</div>
          <div className={classes.markdown__reactMarkdown}>
            <CCMarkdownComponent children={component.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
