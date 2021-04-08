import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./PathCardStyle.css";

const PathCard = (props) => {
  return (
    <div className="PathCard">
      <div className="imgContainer">
        <img className="PathCardLogo" src={props.item.img} alt="logo" />
      </div>
      <br />
      <br />
      <h1 className="PathCardName">{props.item.name}</h1>
      <p className="PathCardDescription">{props.item.description}</p>
      <p className="PathCardModules">{props.item.modules} Modules</p>
      <a className="PathCardBottom" href={`/path/${props.item.slug}`}>
        Get Started! <ArrowRightOutlined />
      </a>
    </div>
  );
};

export default PathCard;
