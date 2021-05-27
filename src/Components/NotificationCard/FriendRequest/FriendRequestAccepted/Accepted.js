import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import classes from "../../notificationCard.module.css";
import { timeDifference } from "../../../../functions/dateConverter";

export default function Accepted({ notification }) {
  return (
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
        </div>
        <div className={classes.info}>
          <Tag className={classes.tag} color='green'>
            Friend
          </Tag>
          <h1 className={classes.time}>
            <ClockCircleOutlined className={classes.icon} />
            {timeDifference(notification.timestamp)}
          </h1>
        </div>
      </div>
      <div className={classes.comment}></div>
    </div>
  );
}
