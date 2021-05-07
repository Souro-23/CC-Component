import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import classes from "./subtopic.module.css";

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const grid = 8;

const SubTopicList = ({ topicId, subtopics, handleSubtopicDrag }) => {
  // const [subtopics, setSubtopics] = useState([]);

  // useEffect(() => {
  //   // console.log(subtopics);
  //   setSubtopics(subtopicArray);
  // }, [subtopicArray]);

  const onDragEnd = (result) => {
    // console.log(result);
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    )
      return;

    // get the items array
    const newItems = [...subtopics];
    // get the draggedItems
    const draggedItem = newItems[result.source.index];
    // delete the item from source position and insert it to the destination positon
    newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, draggedItem);
    // setSubtopics([...newItems]);
    handleSubtopicDrag(topicId, newItems);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              {subtopics.map((item, index) => (
                <Draggable
                  key={`item-${item.sno}`}
                  draggableId={`item-${item.sno}`}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      // style={getItemStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
                    >
                      <p style={{ height: "50px", backgroundColor: "green" }}>
                        {item.name}
                      </p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SubTopicList;

// class for particular item
// className={classes.subtopicLink}
// <div  className={classes.subtopicLink}>
// <li id={subtopic.sno}>{subtopic.name}</li>
// </div>
