import { Button, Col, Row } from "antd";
import React, { Component } from "react";
import notFoundImage from "../../Images/pageNotFound.png";
import classes from "./PageNotFound.module.css";

export class PageNotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Row justify='center' className={classes.k}>
          <Col lg={10}>
            <div className={classes.n}>
              <h1>Oops,</h1>
              <h1>You are lost!</h1>
              <div style={{ marginTop: "20px" }}>
                <p>We are very sorry for the inconvenient</p>
                <p>
                  Its looks you are trying to access a page that either has been
                  delted or never existed.
                </p>
                <Button
                  onClick={() => this.props.history.push("/")}
                  className={classes.Button2}>
                  BACK TO HOME
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <img
              alt='page not found'
              className={classes.l}
              src={notFoundImage}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default PageNotFound;
