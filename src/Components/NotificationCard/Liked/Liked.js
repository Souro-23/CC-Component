import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import classes from "../notificationCard.module.css";
import { timeDifference } from "../../../functions/dateConverter";

export default function Liked({ notification }) {
  return (
    <Link to={{ pathname: "/post/" + notification.parent.slug }}>
      <div className={classes.frindList}>
        <div className={classes.ProfileImage}>
          <Avatar
            className={classes.ProfileImageimg}
            src={notification.from_user.image}
          />
        </div>
        <div className={classes.ProfileBox}>
          <div className={classes.l}>
            <h4>
              <Link
                to={{ pathname: "/profile/" + notification.from_user.slug }}>
                {notification.from_user.username}
              </Link>
              liked your post "{notification.parent.body}"
            </h4>
            <h1 className={classes.time}>
              {timeDifference(notification.timestamp)}
            </h1>
          </div>
          <div className={classes.info}></div>
        </div>
      </div>
    </Link>
  );
}
