<<<<<<< HEAD
import { Button, Input } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import classes from "./VideoPlayer.module.css";

export default function VideoPlayer() {
  const [videoURL, setVideoURL] = useState("");
  const [url, setUrl] = useState("");
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
=======
import { ArrowDownOutlined, ArrowUpOutlined, CloseCircleOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Input, Popover } from "antd";
import React, { useState,useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { subtopicContext } from "../Root/Root";
import classes from "./VideoPlayer.module.css";
import IconClasses from '../MoreIcons.module.css'



const UP = -1
const DOWN = 1 


export default function VideoPlayer({ component, index }) {
  const [videoURL, setVideoURL] = useState("");
  const [url, setUrl] = useState("");
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const {subtopic, changeSubtopic, handleMove, RemoveComponent, addComponent} = useContext(subtopicContext)


>>>>>>> 3bdd116fa479b3d2ebe3b1fd02f8e7ea31653135
  const onChangeHandler = (e) => {
    setVideoURL(e.target.value);
  };

<<<<<<< HEAD
=======

>>>>>>> 3bdd116fa479b3d2ebe3b1fd02f8e7ea31653135
  const loadURL = () => {
    setUrl(videoURL);
    setShowVideoPlayer(true);
  };

  const uploadVideo = () => {
    // TODO: firebase and other stuff
  };
<<<<<<< HEAD

  return (
    <div>
=======
  const content = (
    <div className={IconClasses.moreIcons}>
        <ArrowUpOutlined onClick={() => handleMove(index, UP)} className={IconClasses.moreIcon} />
        <CloseCircleOutlined onClick={() => RemoveComponent(index)}  className={IconClasses.moreIcon} />
        <ArrowDownOutlined onClick={()=>handleMove(index, DOWN)}  className={IconClasses.moreIcon} />
    </div>
);

  return (
    <div className={classes.videoComponent}>
      <div style={{ display: 'flex', justifyContent: "end" }}>
        <Popover placement="bottomRight" content={content} trigger="hover">
          <MoreOutlined className={IconClasses.more} />
        </Popover>
      </div>
>>>>>>> 3bdd116fa479b3d2ebe3b1fd02f8e7ea31653135
      <div className={classes.videoInput}>
        <Input
          value={videoURL}
          onChange={onChangeHandler}
          placeholder='Paste Video URL here'></Input>
        <Button onClick={loadURL} type='primary'>
          Load
        </Button>
      </div>
<<<<<<< HEAD
      <Button onClick={uploadVideo} type='primary'>
        Upload Video
      </Button>
      <div className={classes.playerWwrapper}>
=======
      {/* <Button onClick={uploadVideo} type='primary'>
        Upload Video
      </Button> */}
      <br/>
      <div className={classes.playerWrapper}>
>>>>>>> 3bdd116fa479b3d2ebe3b1fd02f8e7ea31653135
        {showVideoPlayer && (
          <ReactPlayer
            className={classes.reactPlayer}
            url={url}
<<<<<<< HEAD
            width='100%'
            // height='100%'
=======
            controls={true}
            width='90%'
            style={{borderRadius:"10px", overflow:"hidden"}}
>>>>>>> 3bdd116fa479b3d2ebe3b1fd02f8e7ea31653135
          />
        )}
      </div>
    </div>
  );
}
