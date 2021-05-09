import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Input, Popover } from "antd";
import React, { useState, useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { subtopicContext } from "../Root/Root";
import classes from "./VideoPlayer.module.css";
import IconClasses from "../MoreIcons.module.css";
import TextArea from "antd/lib/input/TextArea";

const UP = -1;
const DOWN = 1;

export default function VideoPlayer({ component, index }) {
  const [videoURL, setVideoURL] = useState("");
  const [url, setUrl] = useState("");
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const {
    subtopic,
    changeSubtopic,
    handleMove,
    RemoveComponent,
    addComponent,
  } = useContext(subtopicContext);

  const onChangeHandler = (e) => {
    setVideoURL(e.target.value);
  };

  const captionChange = (e) => {
    let content = {
      src: videoURL,
      caption: e.target.value,
    };
    changeSubtopic(index, content, "video");
  };
  const loadURL = () => {
    setUrl(videoURL);
    setShowVideoPlayer(true);
    let content = {
      caption: "video caption",
      src: videoURL,
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
          value={videoURL}
          onChange={onChangeHandler}
          placeholder='Paste Video URL here'></Input>
        <Button onClick={loadURL} type='primary'>
          Load
        </Button>
      </div>
      {/* <Button onClick={uploadVideo} type='primary'>
        Upload Video
      </Button> */}
      <br />
      <div className={classes.playerWrapper}>
        {showVideoPlayer && (
          <ReactPlayer
            className={classes.reactPlayer}
            url={url}
            controls={true}
            width='90%'
            style={{ borderRadius: "10px", overflow: "hidden" }}
          />
        )}
      </div>
      <TextArea
        autoSize={{ minRows: 1 }}
        maxLength={200}
        onChange={captionChange}
        placeholder='Enter Caption'
        size='large'
        style={{ borderRadius: "5px", marginTop: "20px" }}
      />
    </div>
  );
}
