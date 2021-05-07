import React, { useState } from "react";
import classes from "./ImageContainer.module.css";

export default function ImageContainer({ component, index }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ margin: "20px 0px" }}>
      {component.isBackground ? (
        <div
          className={
            component.isBackground ? classes.backgroundImageContainer : ""
          }>
          <img
            className={classes.backgroundImage}
            src={component.src}
            alt={component.caption}
            onClick={() => setShowModal(true)}
          />
          <p className={classes.imageCaption}>{component.caption}</p>
        </div>
      ) : (
        <div style={{ border: "1px solid #9e99f5", borderRadius: "5px" }}>
          <img
            className={classes.normalImage}
            src={component.src}
            alt={component.caption}
            onClick={() => setShowModal(true)}
          />
          <p className={classes.imageCaption}>{component.caption}</p>
        </div>
      )}

      {showModal && (
        <div className={classes.modal}>
          <span className={classes.close} onClick={() => setShowModal(false)}>
            &times;
          </span>

          <img
            className={classes.modalContent}
            src={component.src}
            alt={component.caption}
          />

          <div className={classes.caption}>{component.caption}</div>
        </div>
      )}
    </div>
  );
}
