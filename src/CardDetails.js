import React from 'react'
import { ArrowRightOutlined } from "@ant-design/icons";
import Card_class from "./CardDetails.module.css";
import Images from "./Images/cover.png"
const CardDetails = (props) => {
    const {name, content} = props.course;
    
    return (
        <div className={Card_class.Card_display}>
            <div className={Card_class.Card_details}>
            <div className={Card_class.course_image}>
                <img src={content.image? content.image : Images} alt="logo" height="100px" width="100px"/>
                </div>
                <div className={Card_class.course_discription}>
                <h1>{name}</h1>
                    <p font-color= "grey">
                        {content.about}
                   </p>
                </div>
            </div>
            <ArrowRightOutlined />
        </div>
    );
};

export default CardDetails
