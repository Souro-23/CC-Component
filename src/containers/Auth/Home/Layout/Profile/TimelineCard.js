import React from "react";
import { Link } from "react-router-dom";
import classes from "./TimelineCard.module.css";
import { Button, message } from "antd";
import GroupIcon from "@material-ui/icons/Group";
import Cover from "../../../../../Images/cover.png";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import { IconButton } from "@material-ui/core";
import { Follow_page, Send_request } from "../../../../../Constants/ApiUrls";
import { axiosAPI } from "../../../../../Axios/Axios";

class TimelineCard extends React.Component {
  state = {
    type: this.props.suggType,
    removeable: this.props.remove === "true" ? true : false,
    buttonText: this.props.suggType === "PAGE" ? "Follow" : "Add Friend",
    buttonLoading: false,
  };

  followOrAdd = (cardId) => {
    this.setState({
      buttonLoading: true,
    });

    let url;
    let data;

    if (this.state.type === "PAGE") {
      url = Follow_page;
      data = {
        slug: this.props.item.slug,
      };
    } else {
      url = Send_request + this.props.item.slug;
      data = {};
    }
    axiosAPI("POST", url, data)
      .then((response) => {
        this.setState({
          buttonLoading: false,
          buttonText: this.state.type === "PAGE" ? "Following" : "Request Sent",
        });
        // TODO send Notification if add friend 
        setTimeout(() => {
          this.props.onRemoveSuggestion(cardId);
        }, 1500);
      })
      .catch(function (error) {
        if (error.response) {
          message.error(error.response.data);
          message.error(error.response.headers);
          message.error(error.response.status);
        } else if (error.request) {
          message.error(error.request);
        } else {
          message.error("Error", error.message);
        }
      });
  };

  render() {
    const { item } = this.props;
    const onRemoveSuggestion = this.props.onRemoveSuggestion;

    return (
      <div className={classes.timelineCard}>
        <div className={classes.coverImage}>
          <img
            src={
              this.state.type === "PAGE"
                ? item.background
                  ? item.background
                  : Cover
                : Cover
            }
            alt='cover'
          />
          {this.state.removeable && (
            <span className={classes.cancel}>
              <IconButton style={{ outline: "none" }}>
                <CancelSharpIcon
                  className={classes.cancelicon}
                  onClick={() => onRemoveSuggestion(item.slug)}
                />
              </IconButton>
            </span>
          )}
        </div>
        <div className={classes.timelineCardList}>
          <div className={classes.timelineCardImage}>
            <img
              alt='cover'
              src={item.image ? item.image : ""}
              className={classes.image}
            />
          </div>
          <Link to={{ pathname: "/profile/" + item.slug }}>
            <div className={classes.timelineDetails}>
              <h2 className={classes.timelineCardName}>
                {this.state.type === "PAGE"
                  ? item.name
                  : item.first_name + " " + item.last_name}
              </h2>
              <h6 className={classes.timelineCardUsername}>
                {" "}
                @{this.state.type === "PAGE" ? item.slug : item.username}
              </h6>
              <p className={classes.extraDetail}>
                <GroupIcon />{" "}
                <span
                  style={{
                    display: "flex",
                    padding: "0 .5rem",
                    alignSelf: "baseline",
                  }}>
                  {this.state.type === "PAGE" ? item.followers : item.friends}
                </span>
              </p>
            </div>
          </Link>
          <Button
            onClick={() => this.followOrAdd(item.slug)}
            loading={this.state.buttonLoading}>
            {this.state.buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

export default TimelineCard;
