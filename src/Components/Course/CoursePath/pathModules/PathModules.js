import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import PathCard from "./PathCard";
import classes from "./PathModules.module.css";
import {
  ClockCircleOutlined,
  BookOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { axiosAPI } from "../../../../Axios/Axios";
import PathModule from "./pathModule/PathModule";
import { Row, Col } from "antd";

export default function PathModules() {
  const [list, setList] = useState(null);
  const { pathSlug } = useParams();

  useEffect(() => {
    getPaths();
  }, []);

 const getPaths = async () => {
    axiosAPI("get", Course_path + pathSlug)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return list ? (
    <div className={classes.PathListContainer}>
      <Row justify='center'>
        <Col lg={17}>
          <div className={classes.PathList}>
            {list.subjects?.map((item, index) => {
              return (
                <>
                  <PathModule key={index} item={item} index={index} />
                </>
              );
            })}
          </div>
        </Col>
        <Col lg={7}>
          <div className={classes.ModuleDetails}>
            <div className={classes.ModDet}>
              <ClockCircleOutlined style={{ color: "#2B7DE9" }} />
              <p
                style={{
                  margin: "0 0 3px 10px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}>
                31 Hours
              </p>
            </div>
            <div className={classes.ModDet}>
              <BookOutlined style={{ color: "#2B7DE9" }} />
              <p
                style={{
                  margin: "0 0 3px 10px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}>
                386 Lessons
              </p>
            </div>
            <div className={classes.ModDet}>
              <PaperClipOutlined style={{ color: "#2B7DE9" }} />
              <p
                style={{
                  margin: "0 0 3px 10px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}>
                19 Quizes
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <div>loading</div>
  );
}
