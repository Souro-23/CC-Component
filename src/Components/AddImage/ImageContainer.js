import React, { useState } from "react";
import classes from "./ImageContainer.module.css";

export default function ImageContainer({
  src,
  caption = "Image",
  isBackground = null,
  index,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };

  const hideModal = () => {
    setShowModal(false);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "visible";
  };
  return src !== "" ? (
    <div style={{ margin: "20px 0px" }}>
      {isBackground !== null && isBackground === true ? (
        <div className={classes.backgroundImageContainer}>
          <img
            className={classes.backgroundImage}
            src={src}
            alt={caption}
            onClick={openModal}
          />
          <p className={classes.imageCaption}>{caption}</p>
        </div>
      ) : (
        <div
          style={{
            border: "1px solid #9e99f5",
            borderRadius: "5px",
            overflow: "hidden",
          }}>
          <img
            className={classes.normalImage}
            src={src}
            alt={caption}
            onClick={openModal}
          />
          <p className={classes.imageCaption}>{caption}</p>
        </div>
      )}

      {showModal && (
        <div className={classes.modal}>
          <span className={classes.close} onClick={hideModal}>
            &times;
          </span>

          <img className={classes.modalContent} src={src} alt={caption} />

          <div className={classes.caption}>{caption}</div>
        </div>
      )}
    </div>
  ) : null;
}
