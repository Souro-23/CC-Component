import { Button, Input } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import classes from "./VideoPlayer.module.css";

export default function VideoPlayer() {
  const [videoURL, setVideoURL] = useState("");
  const [url, setUrl] = useState("");
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const onChangeHandler = (e) => {
    setVideoURL(e.target.value);
  };

  const loadURL = () => {
    setUrl(videoURL);
    setShowVideoPlayer(true);
  };

  const uploadVideo = () => {
    // TODO: firebase and other stuff
  };

  return (
    <div>
      <div className={classes.videoInput}>
        <Input
          value={videoURL}
          onChange={onChangeHandler}
          placeholder='Paste Video URL here'></Input>
        <Button onClick={loadURL} type='primary'>
          Load
        </Button>
      </div>
      <Button onClick={uploadVideo} type='primary'>
        Upload Video
      </Button>
      <div className={classes.playerWwrapper}>
        {showVideoPlayer && (
          <ReactPlayer
            className={classes.reactPlayer}
            url={url}
            width='100%'
            // height='100%'
          />
        )}
      </div>
    </div>
  );
}
