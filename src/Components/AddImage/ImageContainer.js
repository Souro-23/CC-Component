import React, { useState } from "react";
import classes from "./ImageContainer.module.css";

export default function ImageContainer({
  src,
  caption,
  isBackground,
  container,
  alt,
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
            alt={alt}
            onClick={openModal}
          />
          {caption !== "" ? (
            <p className={classes.imageCaption}>{caption}</p>
          ) : null}
        </div>
      ) : (
        <div className={container ? classes.normalImageContainer : ""}>
          <img
            className={classes.normalImage}
            src={src}
            alt={alt}
            onClick={openModal}
          />
          {caption !== "" ? (
            <p className={classes.imageCaption}>{caption}</p>
          ) : (
            ""
          )}
        </div>
      )}

      {showModal && (
        <div className={classes.modal}>
          <span className={classes.close} onClick={hideModal}>
            &times;
          </span>

          <img className={classes.modalContent} src={src} alt={alt} />

          <div className={classes.caption}>{caption}</div>
        </div>
      )}
    </div>
  ) : null;
}

ImageContainer.defaultProps = {
  caption: "",
  isBackground: false,
  container: false,
  alt: "",
};
