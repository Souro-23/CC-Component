import { Col, Row, Skeleton } from "antd";
import React, { Component } from "react";
import classes from "./Suggestions.module.css";
import { Affix } from "antd";
import {
  Suggested_course,
  Suggested_friends
} from "../../../../../../Constants/ApiUrls";

import { Link } from "react-router-dom";

import { ProfileSuggessionCard } from "../../../../../../Components/Suggession/SuggessionCard";
import { axiosAPI } from "../../../../../../Axios/Axios";
import { PageSuggessionCard } from "../../../../../../Components/Suggession/SuggestionPage";

export default class Suggestions extends Component {
  state = {
    users: null,
    courses: null,
  };
  componentDidMount() {
    axiosAPI("get", Suggested_friends)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axiosAPI("get", Suggested_course)
      .then((res) => {
        this.setState({ courses: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <Row justify='end'>
        <Col xl={19} md={22}>
          {!this.props.isEmpty && (
            <div className={classes.s}>
              <div className={classes.h}>
                <h1 style={{ fontSize: "20px" }}>Suggested Friends</h1>
              </div>
              <div className={classes.f}>
                <ProfileSuggessionCard profiles={this.state.users} />
              </div>
              <div className={classes.g}>
                <Link to={{ pathname: "/users" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#6C63FF",
                      textAlign: "center",
                    }}>
                    View More
                  </p>
                </Link>
              </div>
            </div>
          )}
          {!this.props.isEmpty && (
            <div className={classes.s}>
              <div className={classes.h}>
                <h1 style={{ fontSize: "20px" }}>Suggested Pages</h1>
              </div>
              <div className={classes.f}>
                <PageSuggessionCard profiles={this.state.users} />
              </div>
              <div className={classes.g}>
                <Link to={{ pathname: "/users" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#6C63FF",
                      textAlign: "center",
                    }}>
                    View More
                  </p>
                </Link>
              </div>
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

// axios.get(Suggested_friends, {
//     headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('token')
//     }
// }).then(response => {
//     this.setState({
//         users: response.data
//     })
// }).catch(function (error) {
//     if (error.response) {
//         message.error('Page not found refresh again');
//     } else if (error.request) {
//         message.error("OOPS!! Something went wrong , Please retry");
//     } else {
//         message.error('Error', error.message);
//     }
// });

// axios.get(Suggested_course, {
//     headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('token')
//     },

// }).then(res => {
//     this.setState({ courses: res.data })
// }).catch(err => console.log(err))
