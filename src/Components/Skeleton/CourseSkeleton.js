import React from "react";
import { Skeleton, Col, Card } from "antd";
import classes from "./CourseSkeleton.module.css";
import skeletonImage from "../../Images/CourseSkeleton.png";

export default function CourseSkeleton({ items }) {
  return items.map((item) => (
    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
      <Card
        className={classes.card}
        cover={<img alt='example' src={skeletonImage} height='170px' />}>
        <Skeleton active avatar paragraph={{ rows: 3 }} />
      </Card>
    </Col>
  ));
}
