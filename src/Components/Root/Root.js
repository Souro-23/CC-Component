import React, { useState } from 'react'
import ImageSelector from '../AddImage/ImageSelector';
import MarkdownEditor from '../Markdown/Markdown';
import QuizCreator from '../Quiz/QuizEditor'


export const subtopicContext = React.createContext();
const UP = -1
const DOWN = 1



export default function Root() {

    const [subtopic,setSubtopic] = useState(components)

    const changeSubtopic=(index,content,type="md")=>{
       const newSubtopic = subtopic.map((component, Index )=>{
            if(index===Index)
                return{
                    type:type,
                    content:content
                }
            return component
        })
        console.log(index,content,newSubtopic)
        setSubtopic(newSubtopic)
    }

    const addComponent = (index, type) => {
        // to add a new component in the array
        let MDComponent = {
          type: "md",
          content: ""
        };
        let imageComponent={
          type:"image",
          src:""
        }
        let quizComponent={
            type:"quiz",
            quizData:""
          }
        let newSubtopic = subtopic
        if(type==="md")
            newSubtopic.splice(index+1 , 0, MDComponent);
        if(type==="image")
            newSubtopic.splice(index+1, 0, imageComponent);
        if(type==="quiz")
            newSubtopic.splice(index+1, 0, quizComponent);    
        console.log (newSubtopic)
        setSubtopic([...newSubtopic]);
    };
    const handleMove = (position, direction) => {
      console.log(position , direction)
        if (position < 0)
          throw new Error("Given item not found.")
        else if ((direction === UP && position === 0) || (direction === DOWN && position === subtopic.length - 1))
          return // canot move outside of array
        const component = subtopic[position]
        let newSubtopic = subtopic.filter((item, index) => index !== position)
        newSubtopic.splice(position + direction, 0, component)
        setSubtopic(newSubtopic)
    }
    const RemoveComponent = (position) => {
      console.log("removed")
        let newSubtopic = subtopic.filter((item, index) => index !== position)
        setSubtopic(newSubtopic)
    }


    return (
        <subtopicContext.Provider value={{subtopic, changeSubtopic , addComponent,handleMove,RemoveComponent}}>
            {
            subtopic.map((component, index)=>{
                if (component.type==="md")
                    return <MarkdownEditor key ={index} component={component} index={index}/>
                if (component.type==="image")
                    return <ImageSelector key ={index} component={component} index={index}/>
                if (component.type==="quiz")
                    return <QuizCreator key ={index} component={component} index={index}/>  
            })
            }
        </subtopicContext.Provider>
        
    )
}



var components = [
     
    {
      type: "image",
      src: "This is image"
    },
    {
      type: "quiz",
      content: 'this is a quiz'
    }
  ];
