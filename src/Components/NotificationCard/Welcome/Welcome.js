import React from "react";
import { Avatar } from "antd";
import classes from "../notificationCard.module.css";
import { timeDifference } from "../../../functions/dateConverter";

export default function Liked({ notification }) {
  return (
    <div className={classes.frindList}>
      <div className={classes.ProfileImage}>
        <Avatar
          className={classes.ProfileImageimg}
          src='https://firebasestorage.googleapis.com/v0/b/citizenchoice-db503.appspot.com/o/static%2FCc%20Preview%20Image.png?alt=media&token=a91004a7-debc-413e-b421-24c242b6baff'
        />
      </div>
      <div className={classes.ProfileBox}>
        <div className={classes.l}>
          <h4>{notification.body}</h4>
          <h1 className={classes.time}>
            {timeDifference(notification.timestamp)}
          </h1>
        </div>
        <div className={classes.info}></div>
      </div>
    </div>
  );
}
