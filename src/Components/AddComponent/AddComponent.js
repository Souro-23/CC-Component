import { FileImageOutlined, LogoutOutlined, PicCenterOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import React from "react";
import classes from "./AddComponent.module.css";

const AddComponent = ({ onAddComponent, index }) => {
  const content = (
    <div>
      <FileImageOutlined onClick={() => onAddComponent(index,"image")}  className={classes.moreIcon} />
      <LogoutOutlined onClick={() => onAddComponent(index,"quiz")}   className={classes.moreIcon} />
      <PicCenterOutlined  onClick={() => onAddComponent(index,"md")}  className={classes.moreIcon}/>
    </div>
  );
  return (
    <div class={classes.hoverMenu}>
       
      <Popover content={content} placement="right">
        <button className={classes.hoverMenu__Btn}>+</button>
      </Popover>
    </div>
  );
};

export default AddComponent;
