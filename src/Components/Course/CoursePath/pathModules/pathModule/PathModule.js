import React from "react";
import classes from "./PathModule.module.css";

import CardDetails from "../../../../../CardDetails";
// TODO Remove Start Learning Button and add small Course Card

const PathModule = (props) => {
  
  return (
   

    <div className={classes.PathModuleCard}>
      <p className={classes.moduleCount}>MODULE {props.index + 1}</p>
      <h1 className={classes.title}>{props.item.title}</h1>
      <p className={classes.description}>{props.item.description}</p>
      <div className={classes.moduleBtn_display}>
{/* to make it flex i changed in css file of path module  */}
{props.item.courses.map((course, index) => (
  <div className={classes.moduleBtn}>
    
 <CardDetails course={course} key={index} />
  
   </div>

))}
      </div>
      </div>
  );
};

export default PathModule;
