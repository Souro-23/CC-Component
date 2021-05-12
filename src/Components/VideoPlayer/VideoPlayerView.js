import React from "react";
import ReactPlayer from "react-player/lazy";
import classes from "./VideoPlayer.module.css";

export default function VideoPlayerView({ component }) {
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        className={classes.reactPlayer}
        url={component.src}
        controls={true}
        width='100%'
        style={{ borderRadius: "5px", overflow: "hidden" }}
      />
    </div>
  );
}
