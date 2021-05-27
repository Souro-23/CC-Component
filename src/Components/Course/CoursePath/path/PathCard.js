import React from "react";
import classes from "./PathCard.module.css";
import { Col } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

// TODO Path Image check
export class CourseCard extends React.Component {
  render() {
    const Paths = this.props.paths.map((path) => {
      return (
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <Link to={{ pathname: "/courses/" + path.slug }}>
            <div className={classes.PathCard}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.PathCardLogo}
                  src={path.image?.src}
                  alt='logo'
                />
              </div>
              <div className={classes.PathContent}>
                <h1 className={classes.PathCardName}>{path.name}</h1>
                <p className={classes.PathCardDescription}>
                  {path.description}
                </p>
              </div>
              <p className={classes.PathCardModules}>
                {path.subjects.length} Modules
              </p>
              <Link
                className={classes.PathCardBottom}
                to={`/courses/${path.slug}`}>
                Get Started! <ArrowRightOutlined />
              </Link>
            </div>
          </Link>
        </Col>
      );
    });
    return <>{Paths}</>;
  }
}

export default CourseCard;
