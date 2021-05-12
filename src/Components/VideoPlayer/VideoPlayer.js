import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Input, Popover } from "antd";
import React, { useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { subtopicContext } from "../Root/Root";
import classes from "./VideoPlayer.module.css";
import IconClasses from "../MoreIcons.module.css";

const UP = -1;
const DOWN = 1;

export default function VideoPlayer({ component, index }) {
  const { changeSubtopic, handleMove, RemoveComponent } =
    useContext(subtopicContext);

  const onChangeHandler = (e) => {
    let content = {
      src: e.target.value,
      caption: component.caption,
    };
    changeSubtopic(index, content, "video");
  };

  const captionChange = (e) => {
    let content = {
      src: component.src,
      caption: e.target.value,
    };
    changeSubtopic(index, content, "video");
  };

  const uploadVideo = () => {
    // TODO: firebase and other stuff
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
    <div className={classes.videoComponent}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Popover placement='bottomRight' content={content} trigger='hover'>
          <MoreOutlined className={IconClasses.more} />
        </Popover>
      </div>
      <div className={classes.videoInput}>
        <Input
          value={component.src}
          onChange={onChangeHandler}
          placeholder='Paste Video URL here'></Input>
      </div>
      <br />
      <div className={classes.playerWrapper}>
        {component.src !== "" && (
          <>
            <ReactPlayer
              className={classes.reactPlayer}
              url={component.src}
              controls={true}
              width='100%'
              style={{ borderRadius: "10px", overflow: "hidden" }}
            />
          </>
        )}
      </div>
      <br />
      {component.src !== "" && (
        <div className={classes.videoInput}>
          <Input
            value={component.caption}
            onChange={captionChange}
            placeholder='Enter Caption'
            size='large'></Input>
        </div>
      )}
    </div>
  );
}
