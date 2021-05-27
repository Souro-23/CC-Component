import React from "react";
import { Row, Col, Input } from "antd";
import classes from "./Profile.module.css";
import { Suggested_friends } from "../../../../../Constants/ApiUrls";
import TimelineCard from "./TimelineCard.js";
// import DynamicTitle from "../../../../../components/DynamicTitle";
import { axiosAPI } from "../../../../../Axios/Axios";

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
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }
  render() {
    const suggestedfriends = this.state.users.map((user) => {
      return (
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <TimelineCard item={user} key={user.slug} suggType='FRIEND' />
        </Col>
      );
    });

    return (
      <React.Fragment>
        {/*  <DynamicTitle title='Users | Citizen Choice' /> */}
        <div className={classes.mainbox}>
          <div className={classes.banner}>
            <Row>
              <Col sm={14} xs={24}>
                <div className={classes.bannerText}>
                  <h1>Suggested Friends</h1>
                </div>
              </Col>
              <Col sm={8} xs={24}>
                <Search
                  placeholder='Search Friend'
                  enterButton
                  onChange={this.onChange}
                  loading={this.state.searching}
                  size='large'
                  onSearch={this.searching}
                />
              </Col>
            </Row>
          </div>
          <Row gutter={[32, 32]}>{suggestedfriends}</Row>
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
