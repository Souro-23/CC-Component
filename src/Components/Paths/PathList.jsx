import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PathCard from "./PathCard";
import "./PathList.css";
import {
  ClockCircleOutlined,
  BookOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

const PathList = (props) => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getPaths();
  }, []);

  const getPaths = async () => {
    let response = await fetch(`https://demo.citizenchoice.in/path/${id}`);
    let data = await response.json();
    setList(data);
    console.log(list);
  };

  return (
    <div className="PathListContainer">
      <div className="PathList">
        {list.subjects?.map((item, index) => {
          return (
            <>
              <PathCard item={item} index={index} />
              {console.log(item)}
            </>
          );
        })}
      </div>
      <div className="ModuleDetails">
        <div className="ModDet">
          <ClockCircleOutlined style={{ color: "#2B7DE9" }} />
          <p
            style={{
              margin: "0 0 3px 10px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            31 Hours
          </p>
        </div>
        <div className="ModDet">
          <BookOutlined style={{ color: "#2B7DE9" }} />
          <p
            style={{
              margin: "0 0 3px 10px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            386 Lessons
          </p>
        </div>
        <div className="ModDet">
          <PaperClipOutlined style={{ color: "#2B7DE9" }} />
          <p
            style={{
              margin: "0 0 3px 10px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            19 Quizes
          </p>
        </div>
      </div>
    </div>
  );
};

export default PathList;
