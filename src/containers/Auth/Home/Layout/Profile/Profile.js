import React from "react";
import { Row, Col, Input } from "antd";
import classes from "./Profile.module.css";
import { Suggested_friends } from "../../../../../Constants/ApiUrls";
import TimelineCard from "./TimelineCard.js";
// import DynamicTitle from "../../../../../components/DynamicTitle";
import { axiosAPI } from "../../../../../Axios/Axios";
import { StayPrimaryLandscapeSharp } from "@material-ui/icons";

const { Search } = Input;

export class Profile extends React.Component {
  state = {
    users: [],
    searching: false,
    noDataFound: false,
    query: "",
  };
  componentDidMount() {
    axiosAPI("get", Suggested_friends)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }
  render() {
    const collegeFriends = this.state.users.slice(0, 10);
    const friends = this.state.users.slice(10, 40);
    const suggestedCollgeFriends = collegeFriends.map((user) => {
      return (
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <TimelineCard item={user} key={user.slug} suggType="FRIEND" />
        </Col>
      );
    });

    const suggestedFriends = friends.map((user) => {
      return (
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <TimelineCard item={user} key={user.slug} suggType="FRIEND" />
        </Col>
      );
    });

    return (
      <React.Fragment>
        {/*  <DynamicTitle title='Users | Citizen Choice' /> */}
        <div className={classes.mainbox}>
          <div className={classes.banner}>
            <Row justify="center">
              <Search
                className={classes.SearchBox}
                placeholder="What you want to learn?"
                // enterButton
                // allowClear
                // onSearch={onSearch}
                // style={{ width: 200 }}
                size="large"
              />
            </Row>
            <Row>
              <Col sm={14} xs={24}>
                <div className={classes.bannerText}>
                  <h1>Suggested Friends of Your College</h1>
                </div>
              </Col>
            </Row>
          </div>
          <Row gutter={[32, 32]}>{suggestedCollgeFriends}</Row>
        </div>
        <div className={classes.mainbox}>
          <div className={classes.banner}>
            <Row>
              <Col sm={14} xs={24}>
                <div className={classes.bannerText}>
                  <h1>Other Suggested Friends</h1>
                </div>
              </Col>
            </Row>
          </div>
          <Row gutter={[32, 32]}>{suggestedFriends}</Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;

// axios
// .get(Suggested_friends, {
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("token"),
//   },
// })
// .then((response) => {
//   this.setState({
//     users: response.data,
//   });
// })
// .catch(function (error) {
//   if (error.response) {
//     message.error("Page not found refresh again");
//   } else if (error.request) {
//     message.error("OOPS!! Something went wrong , Please retry");
//   } else {
//     message.error("Error", error.message);
//   }
// });

// Global CSS (.css)
// class = "card-image"
// class = "card-image"
// friendscomponent
// <img class = "card-image" / > PRIYANSH
// <img class = "card-image" / > Atif

// React -> modular css (.module.css)
