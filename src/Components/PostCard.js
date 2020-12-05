import React from 'react'
import classes from './PostCard.module.css'
import { Row, Col } from "antd";
import { EllipsisOutlined, } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

import  FullScreenCard  from './fullScreenCard';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


export default function PostCard(props) {
    const menu = (
        <Menu>
          <Menu.Item >
            Report
              </Menu.Item>
        </Menu>
      );
    return (
        <div className={classes.Card}>
        <div className={classes.cardHeader}>
          <div className={classes.userDetails}>
            <div className={classes.profilePic}>
                <img alt='' src="https://testccserver.s3.amazonaws.com/media/profile/images/default/new.png" />
            </div>
            <div className={classes.profileInfo}>
              <div className={classes.profileName}>
                  Sourodeep Ghosh Roy
              </div>
              <div className={classes.postTime}>2 days ago</div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <EllipsisOutlined
                  style={{ fontSize: "2rem", fontWeight: "500" }}
                />
              </Dropdown>
            </div>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.postContent}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
          </div>
          <Carousel renderThumbs={() => null}>
            {props.data.images.map(image => (
              <div  onclick={console.log(image)} className={classes.postimage}>
                <img alt='' src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={classes.postDetails}>
          <Row className={classes.icons}>
            <Col
              className={classes.shine}
              style={{ cursor: "pointer" }}>
              <ion-icon
                name= "chatbubble-outline"
                style={{ padding: " 0 .6rem", color: 'grey' }}
                size='large'></ion-icon>
            </Col>
            <Col   className={classes.shine} style={{ cursor: "pointer" }}>
              <ion-icon
                name='paper-plane-outline'
                size='large'
                style={{ padding: "0 .6rem", color: 'grey' }}></ion-icon>
            </Col>
          </Row>
          
        </div>
        <FullScreenCard images = {props.data.images}/>
      </div>

 
      
    )
}

