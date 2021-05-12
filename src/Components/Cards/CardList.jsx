import React, { useEffect, useState } from "react";
import PathCard from "./PathCard";
import "./CardListStyle.css";

const CardList = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getPaths();
  }, []);

  const getPaths = async () => {
    let response = await fetch("https://demo.citizenchoice.in/path/");
    let data = await response.json();
    setList(data);
  };

  return (
    <div className="CardListContainer">
      {list?.map((item) => {
        return <PathCard item={item} />;
      })}
    </div>
  );
};

export default CardList;
