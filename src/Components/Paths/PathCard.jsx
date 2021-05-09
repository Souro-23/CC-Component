import React from "react";
import "./PathCard.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const PathCard = (props) => {
  return (
    <div className="PathModuleCard">
      <p className="moduleCount">MODULE {props.index + 1}</p>
      <h1 className="title">{props.item.title}</h1>
      <p className="description">{props.item.description}</p>
      <a className="moduleBtn" href={props.item.slug}>
        Start Learning <ArrowRightOutlined />
      </a>
    </div>
  );
};

export default PathCard;
