import classes from "./ImageSelector.module.css";
import React, { useState, useContext } from "react";
import { subtopicContext } from "../Root/Root";
import { Popover, Spin } from "antd";
import {
  ArrowDownOutlined,
  LoadingOutlined,
  ArrowUpOutlined,
  CloseCircleOutlined,
  MoreOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";
import AddComponent from "../AddComponent/AddComponent";
import IconClasses from "../MoreIcons.module.css";

const UP = -1;
const DOWN = 1;

export default function ImageSelector({ component, index }) {
  // const [imageArray, setImageArray] = useState([]);
  const [imageUploading, setImageUploading] = useState(false);
  const [image, setImage] = useState("");
  const {
    subtopic,
    changeSubtopic,
    handleMove,
    RemoveComponent,
    addComponent,
  } = useContext(subtopicContext);

  const toggleBackground = (value) => {
    changeSubtopic(
      index,
      {
        src: image,
        caption: "image name",
        isBackground: !value,
      },
      "img"
    );
    console.log(subtopic);
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
      {image ? (
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
    setImage(url);
    setImageUploading(false);

    changeSubtopic(
      index,
      {
        src: url,
        caption: "image name",
        isBackground: component.isBackground,
      },
      "img"
    );
  };

  // const uploadMultipleFiles = (e) => {
  //   const fileObj = e.target.files;
  //   let uploadingFiles = [];
  //   for (let i = 0; i < fileObj.length; i++) {
  //     uploadingFiles.push({
  //       uploading: true,
  //     });
  //   }
  //   setImageArray([...uploadingFiles, ...imageArray]);

  //   setTimeout(() => {
  //     uploadImage(fileObj);
  //     e.target.value = "";
  //   }, 3000);
  // };

  // const uploadImage = (fileObj) => {
  //   // TODO Some logics to uplaod image
  //   let uploadingFiles = [];
  //   for (let i = 0; i < fileObj.length; i++) {
  //     uploadingFiles.push({
  //       url: URL.createObjectURL(fileObj[i]),
  //       uploading: false,
  //     });
  //   }
  //   setImageArray([...uploadingFiles, ...imageArray]);
  //   changeSubtopic(
  //     index,
  //     {
  //       src: [...uploadingFiles, ...imageArray],
  //       caption: "image name",
  //       isbackground: component.isbackground,
  //     },
  //     "img"
  //   );
  // };

  const removeFile = () => {
    setImage("");
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
          <label className={classes.addImage} htmlFor='subtopicImages'>
            Select an Image
          </label>
          <input
            id='subtopicImages'
            type='file'
            name='subtopicImages'
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
        ) : image ? (
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
                src={image}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
