import React from "react";
import classes from "./PathModule.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";

// TODO Remove Start Learning Button and add small Course Card

const PathModule = (props) => {
  return (
    <div className={classes.PathModuleCard}>
      <p className={classes.moduleCount}>MODULE {props.index + 1}</p>
      <h1 className={classes.title}>{props.item.title}</h1>
      <p className={classes.description}>{props.item.description}</p>
      <a className={classes.moduleBtn} href={props.item.slug}>
        Start Learning <ArrowRightOutlined />
      </a>
    </div>
  );
};

export default PathModule;
