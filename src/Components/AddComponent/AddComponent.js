import { FileImageOutlined, LogoutOutlined, PicCenterOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import React from "react";
import classes from "./AddComponent.module.css";

const AddComponent = ({ onAddComponent, index, showCKEditor , showMD  }) => {
  const content = (
    <div className={classes.add}>
      <ion-icon onClick={() => onAddComponent(index, "img")} name="image-outline"></ion-icon>
      {showMD?
      <ion-icon onClick={() => onAddComponent(index, "md")} name="logo-markdown"></ion-icon>
      :null
      }
      <ion-icon onClick={() => onAddComponent(index, "code")} name="code-outline"></ion-icon>
      <ion-icon onClick={() => onAddComponent(index, "video")} name="videocam-outline"></ion-icon>
      {showCKEditor ?
        <ion-icon onClick={() => onAddComponent(index, "ed")} name="text-outline"></ion-icon>
        : null
      }
    </div>
  );
  return (
    <div className={classes.hoverMenu}>
      <Popover content={content} placement="right">
        <button className={classes.hoverMenu__Btn}>+</button>
      </Popover>
    </div>
  );
};

AddComponent.defaultProps = {
  showCKEditor: true,
  showMD:true
}

export default AddComponent;
