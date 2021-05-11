import classes from "./ImageSelector.module.css";
import React, { useState, useContext } from "react";
import { subtopicContext } from "../Root/Root";
import { Input, Popover, Spin } from "antd";
import {
  ArrowDownOutlined,
  LoadingOutlined,
  ArrowUpOutlined,
  CloseCircleOutlined,
  MoreOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";
import IconClasses from "../MoreIcons.module.css";

const UP = -1;
const DOWN = 1;

export default function ImageSelector({ component, index }) {
  const [imageUploading, setImageUploading] = useState(false);
  const {
    changeSubtopic,
    handleMove,
    RemoveComponent,
  } = useContext(subtopicContext);

  const toggleBackground = (value) => {
    changeSubtopic(
      index,
      {
        src:component.src,
        caption: component.caption,
        isBackground: !value,
      },
      "img"
    );
  };

  const content = (
    <div className={IconClasses.moreIcons}>
      <ArrowUpOutlined
        onClick={() => handleMove(index, UP)}
        className={IconClasses.moreIcon}
      />
      <CloseCircleOutlined
        onClick={() => RemoveComponent(index)}
        className={IconClasses.moreIcon}
      />

      <ArrowDownOutlined
        onClick={() => handleMove(index, DOWN)}
        className={IconClasses.moreIcon}
      />
      {component.src!="" ? (
        <PicCenterOutlined
          onClick={() => toggleBackground(component.isBackground)}
          className={IconClasses.moreIcon}
        />
      ) : null}
    </div>
  );

  const uploadImage = (e) => {
    var fileObj = e.target.files[0];
    setImageUploading(true);
    setTimeout(() => {
      createImageUrl(fileObj);
      e.target.value = "";
    }, 3000);
  };

  const createImageUrl = (fileObj) => {
    // TODO Some logics to uplaod image

    let url = URL.createObjectURL(fileObj);
    setImageUploading(false);

    changeSubtopic(
      index,
      {
        src: url,
        caption: "",
        isBackground: component.isBackground,
      },
      "img"
    );
  };

  const captionChange = (e) => {
    let content = {
      src: component.src,
      isBackground:component.isBackground,
      caption: e.target.value,
    };
    changeSubtopic(index, content, "img");
  };

  const removeFile = () => {
    changeSubtopic(
      index,
      {
        src: "",
        caption: "",
        isBackground: component.isBackground,
      },
      "img"
    );
  };

  return (
    <div>
      <div className={classes.imageSelectComtainer}>
        <div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Popover placement='bottomRight' content={content} trigger='hover'>
              <MoreOutlined className={IconClasses.more} />
            </Popover>
          </div>
          <label className={classes.addImage} htmlFor={'subtopicImages' + index}>
            Select an Image
          </label>
          <input
            id={'subtopicImages' + index}
            type='file'
            name={'subtopicImages' + index}
            multiple={true}
            accept='image/*'
            hidden
            onChange={uploadImage}
          />
        </div>

        <br />
        {imageUploading ? (
          <div key={index} className={classes.loading}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
          </div>
        ) : component.src ? (
          <>
            <div key={index} className={classes.imageDisplayContaner}>
              <CloseCircleOutlined
                className={classes.cancelicon}
                onClick={removeFile}
              />
              <div className={classes.imageBackground}>
                <img
                  className={
                    component.isBackground
                      ? `${classes.imageWithBackground}`
                      : `${classes.selectedImage}`
                  }
                  src={component.src}
                />
              </div>
            </div>
            <div className={classes.videoInput}>
              <Input
                value={component.caption}
                onChange={captionChange}
                placeholder='Enter Caption'
                size='large'>
                </Input>
            </div>
          </>
        ) : null}
      </div>
    </div>


  );
}
