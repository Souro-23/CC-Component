import React from "react";
import { Link } from "react-router-dom";
import { Button, Avatar } from "antd";
import classes from "../../notificationCard.module.css";
import { timeDifference } from "../../../../functions/dateConverter";

export default function Recieved({ notification }) {
  return (
    <Link
      to={{
        pathname: "/my-account/" + notification.to_user.slug + "/friends",
      }}>
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
              {notification.to_user.type === 0 ? (
                <Link
                  to={{ pathname: "/profile/" + notification.from_user.slug }}>
                  {notification.from_user.username}
                </Link>
              ) : (
                <Link to={{ pathname: "/page/" + notification.from_user.slug }}>
                  {notification.from_user.username}
                </Link>
              )}
              {notification.body}
            </h4>
            <h1 className={classes.time}>
              {timeDifference(notification.timestamp)}
            </h1>
          </div>
          <div className={classes.info}>
            <Button className={classes.Button2}>Accept</Button>
            <Button className={classes.Button1}>Reject</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
