import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import classes from "./subtopic.module.css";

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

const SubTopicList = ({ topicId, subtopics, handleSubtopicDrag }) => {
  const onDragEnd = (result) => {
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
    handleSubtopicDrag(topicId, newItems);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {subtopics.map((item, index) => (
                <Draggable
                  key={`item-${item.sno}`}
                  draggableId={`item-${item.sno}`}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
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
