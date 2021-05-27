import React, { Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Row, Col, Avatar, Popover } from "antd";
import {
  HomeOutlined,
  BookOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import classes from "./HomeIndex.module.css";
import { IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
// import { connect } from 'react-redux';
import { HomeRoutes } from "../../../Routes/Routes";
// import * as actions from '../../../store/actions/index';
// import firebase from "../../../Firebase/FirebaseConfig";
// import 'firebase/storage';

// const db = firebase.firestore();

class HomeIndex extends Component {
  state = {
    no_of_notifications: 0,
  };
  // componentDidMount(){
  // 	window.scrollTo(0, 0);
  // 	var docRef = db.collection("Notifications").doc(this.props.profile.username);
  // 	docRef.onSnapshot(doc=>{
  // 		if(doc.exists){
  // 			var last_seen= doc.get("last_notification_time")
  // 			this.callNotifications(docRef, last_seen)
  // 		}
  // 		else{
  // 			var newDocRef = db.collection('Notifications').doc(this.props.profile.username);
  //               var newLastSeen = new Date().getTime()
  // 			newDocRef.set({
  // 				last_notification_time:newLastSeen
  // 			})
  // 			newDocRef.collection('notifications').add({
  // 				body:"Welcome to CitizenChoice , discover new learning while intracting with others",
  // 				timestamp: new Date().getTime(),
  // 				type:5
  // 			  })
  // 			this.callNotifications(docRef, newLastSeen)
  // 		}
  // 	})
  // }

  //   callNotifications(docRef, last_seen){
  // 	docRef.collection("notifications").orderBy("timestamp" ,"desc")
  // 			.onSnapshot((querySnapshot) => {
  // 				var no_of_notifications=0
  // 				querySnapshot.forEach((doc) => {
  // 					// doc.data() is never undefined for query doc snapshots
  // 					if(doc.data().timestamp>=last_seen){
  // 						no_of_notifications=no_of_notifications+1
  // 					}
  // 				});
  // 				this.setState({no_of_notifications:no_of_notifications})
  // 			})
  // }

  render() {
    const Links = [
      {
        icon: <HomeOutlined style={{ fontSize: "28px" }} />,
        link: "/",
      },
      {
        icon: <UserOutlined style={{ fontSize: "28px" }} />,
        link: "/users",
      },
      {
        icon: <BookOutlined style={{ fontSize: "30px" }} />,
        link: "/courses",
      },
      {
        icon: (
          <Badge badgeContent={this.state.no_of_notifications} color='primary'>
            <NotificationOutlined style={{ fontSize: "30px" }} />
          </Badge>
        ),
        link: "/notification",
      },
    ];
    // const logout_user = () => {
    // 	this.props.onLogout()
    // 	this.props.history.push("/");
    // }
    return (
      <div className={classes.homePage}>
        <Row justify='center'>
          <Col xl={11} lg={15} md={16} sm={24} xs={24}>
            <div className={classes.navbar}>
              <ul>
                {Links.map((link) => (
                  <li>
                    <IconButton
                      style={{
                        borderRadius: "15px",
                        padding: "0px",
                        margin: "7px 0px 7px 0px",
                      }}>
                      <NavLink
                        activeClassName={classes.active}
                        exact
                        to={link.link}>
                        {link.icon}
                      </NavLink>
                    </IconButton>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl={8} lg={9} md={7} sm={0} xs={0}>
            <div className={classes.a}>
              <h1>Username</h1>
              <Popover
                placement='bottomRight'
                trigger='click'
                content={
                  <div className={`${classes.menu} ${classes.Active}`}>
                    <h3>
                      {/* {this.props.profile.first_name} {this.props.profile.last_name} */}
                      First name Last name
                      <br />
                      <span>Username</span>
                    </h3>
                    <ul>
                      <Link to={{ pathname: "/my-account/username/setting" }}>
                        <li>
                          <img
                            alt='icon'
                            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcyLjYxNSA0NzIuNjE1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzIuNjE1IDQ3Mi42MTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjM2LjMwOCwwLjk4NUMxMDYuMzM4LDAuOTg1LDAsMTA2LjMzOSwwLDIzNi4zMDhzMTA2LjMzOCwyMzUuMzIzLDIzNi4zMDgsMjM1LjMyMw0KCQkJYzEyOS45NjksMCwyMzYuMzA4LTEwNS4zNTQsMjM2LjMwOC0yMzUuMzIzUzM2Ni4yNzcsMC45ODUsMjM2LjMwOCwwLjk4NXogTTIzNi4zMDgsNDUxLjkzOGMtNTEuMiwwLTk4LjQ2MS0xNy43MjMtMTM1Ljg3Ny00Ny4yNjENCgkJCWw4Ni42NDYtNTguMDkydi0xNi43MzljMTMuNzg1LDcuODc3LDMwLjUyMywxMi44LDU0LjE1NCwxMi44YzEuOTY5LDAsMy45MzgsMCw1LjkwOCwwYzEyLjgsMCwyMi42NDYtMy45MzgsMzEuNTA4LTcuODc3DQoJCQlsMy45MzgsMjMuNjMxbDkwLjU4NSw0NS4yOTJDMzM1Ljc1NCw0MzQuMjE2LDI4OC40OTIsNDUxLjkzOCwyMzYuMzA4LDQ1MS45Mzh6IE0xNTYuNTU0LDE5NC45NTQNCgkJCWMwLTAuOTg1LTkuODQ2LTU1LjEzOSwxOS42OTItODMuNjkyYzI3LjU2OS0yNy41NjksNzYuOC0yMC42NzcsODIuNzA4LTE5LjY5MmM2Ljg5MiwxLjk2OSw1OS4wNzcsMjAuNjc3LDU3LjEwOCw2NS45NjkNCgkJCWwtNS45MDgsMzAuNTIzbDIuOTU0LDMuOTM4YzAsMCwxMy43ODUsMTUuNzU0LDExLjgxNSwzMy40NzdjLTAuOTg1LDkuODQ2LTYuODkyLDE3LjcyMy0xNy43MjMsMjUuNmwtMy45MzgsMi45NTR2NC45MjMNCgkJCWMwLDIuOTU0LTIuOTU0LDYzLjAxNS01NS4xMzksNjQuOTg1Yy00OS4yMzEsMS45NjktNzIuODYxLTE3LjcyMy04MS43MjMtNjUuOTY5bC0wLjk4NS00LjkyM2wtOC44NjItMy45MzgNCgkJCWMtOC44NjEtNS45MDgtMTIuOC0xMi44LTEzLjc4NS0xOS42OTJjLTAuOTg1LTEyLjgsMTEuODE1LTI1LjYsMTEuODE1LTI1LjZsMy45MzgtMy45MzhMMTU2LjU1NCwxOTQuOTU0eiBNMzg2Ljk1NCwzOTAuODkyDQoJCQlsMC45ODUtMS45NjlMMzAwLjMwOCwzNDUuNmwtMy45MzgtMjMuNjMxYzE1Ljc1NC0xNi43MzksMjIuNjQ2LTQwLjM2OSwyMy42MzEtNTcuMTA4YzEyLjgtOS44NDYsMjAuNjc3LTIyLjY0NiwyMi42NDYtMzYuNDMxDQoJCQljMS45NjktMTkuNjkyLTcuODc3LTM3LjQxNS0xMy43ODUtNDQuMzA4bDQuOTIzLTIyLjY0NnYtMC45ODVjMy45MzgtNjMuMDE1LTY3LjkzOC04Ni42NDYtNzAuODkyLTg3LjYzMWgtMC45ODUNCgkJCWMtMi45NTQsMC02NC45ODQtMTAuODMxLTEwMS40MTUsMjUuNmMtMzAuNTIzLDMwLjUyMy0yNy41NjksODAuNzM5LTI1LjYsOTYuNDkyYy01LjkwOCw2Ljg5Mi0xNS43NTQsMjAuNjc3LTEzLjc4NSwzNy40MTUNCgkJCWMwLjk4NSwxMy43ODUsOC44NjEsMjQuNjE1LDIyLjY0NiwzNC40NjJsMS45NjksMC45ODVjMi45NTQsMTUuNzU0LDguODYxLDMzLjQ3NywyMC42NzcsNDcuMjYxdjIyLjY0NmwtODIuNzA4LDU1LjEzOA0KCQkJYy0zOC40LTQxLjM1NC02NC05Ni40OTItNjQtMTU2LjU1NGMwLTExOS4xMzksOTcuNDc3LTIxNS42MzEsMjE2LjYxNS0yMTUuNjMxczIxNi42MTUsOTYuNDkyLDIxNi42MTUsMjE1LjYzMQ0KCQkJQzQ1Mi45MjMsMjk3LjM1NCw0MjcuMzIzLDM1MS41MDgsMzg2Ljk1NCwzOTAuODkyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
                          />
                          Settings
                        </li>
                      </Link>
                      <Link exact to='/course'>
                        <li>
                          <img
                            alt='icon'
                            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDQgNTEyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwNCA1MTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMjkxLjA1NywyNDIuODExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMNCgkJCQljMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2YzQuNDg5LTEuNDI1LDYuOTgtNi4yMjEsNS41NTUtMTAuNzA5Yy0xLjQxNy00LjQ4OS02LjE3OC02Ljk4OS0xMC43MDktNS41NzINCgkJCQljLTI2LjA5NSw4LjI1Mi03NS45ODEsMzMuNTk2LTc4LjA5NywzNC42NzFDMjkwLjU5NiwyMzMuNDY3LDI4OC45MjQsMjM4LjYwNSwyOTEuMDU3LDI0Mi44MTF6Ii8+DQoJCQk8cGF0aCBkPSJNMjk4LjY3NywxNDUuMDcxYzEuMjk3LDAsMi42MjgtMC4yOTksMy44NjYtMC45M2MwLjUwMy0wLjI1Niw1MC43MzEtMjUuNzcxLDc1LjUwMy0zMy41OTYNCgkJCQljNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg5LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MmMtMjYuMDk1LDguMjUyLTc1Ljk4MSwzMy41OTYtNzguMDk3LDM0LjY3MQ0KCQkJCWMtNC4xOTgsMi4xMzMtNS44NzEsNy4yNy0zLjczOCwxMS40NzdDMjkyLjU2NywxNDMuMzY0LDI5NS41NzEsMTQ1LjA3MSwyOTguNjc3LDE0NS4wNzF6Ii8+DQoJCQk8cGF0aCBkPSJNNTAzLjQ2OSwxMjguMDA0Yy00LjcxOSwwLTguNTMzLDMuODIzLTguNTMzLDguNTMzdjMzMi44YzAsMTQuMTE0LTExLjQ4NiwyNS42LTI1LjYsMjUuNmgtMjA0Ljh2LTE5LjYzNQ0KCQkJCWMxMi40NDItNC4zNTIsNDQuODUxLTE0LjQ5OCw3Ni44LTE0LjQ5OGM3NC4zMzQsMCwxMjQuODA5LDE2LjQ2MSwxMjUuMzEyLDE2LjYzMWMyLjU2OCwwLjg1Myw1LjQzNiwwLjQyNyw3LjY4LTEuMTc4DQoJCQkJYzIuMjI3LTEuNjA0LDMuNTQxLTQuMTgxLDMuNTQxLTYuOTIxVjkzLjg3MWMwLTQuMDAyLTIuNzczLTcuNDY3LTYuNjgyLTguMzI5YzAsMC02LjY5LTEuNDkzLTE4LjEyNS0zLjU5Mw0KCQkJCWMtNC42MTctMC44NTMtOS4wNzksMi4yMTktOS45MzMsNi44NDRjLTAuODUzLDQuNjQyLDIuMjEsOS4wODgsNi44NDQsOS45NDFjNC4zNjEsMC44MDIsOC4wMTMsMS41MSwxMC44MjksMi4wNzR2MzU3LjE4OA0KCQkJCWMtMTkuMzM3LTUuMDY5LTYyLjI3Ni0xNC4yNTktMTE5LjQ2Ny0xNC4yNTljLTM3LjE4LDAtNzMuNzAyLDEyLjIxMS04NS4wMDEsMTYuMzVjLTEwLjA0NC00LjQzNy00MC40MDUtMTYuMzUtNzcuMTMzLTE2LjM1DQoJCQkJYy01OC43NzgsMC0xMDcuMTk2LDkuNjk0LTEyOCwxNC42MThWMTAwLjQ3NWMxNy4wNDEtNC4xOSw2Ny4zNzEtMTUuMTM4LDEyOC0xNS4xMzhjMzEuMTEzLDAsNTcuNzk2LDkuNjg1LDY4LjI2NywxNC4wNjN2MzM1LjgwNA0KCQkJCWMwLDMuMDcyLDEuNjU1LDUuOTE0LDQuMzI2LDcuNDI0YzIuNjcxLDEuNTE5LDUuOTY1LDEuNDc2LDguNjAyLTAuMTExYzAuODQ1LTAuNTAzLDg1LjM5My01MS4wMDQsMTYwLjQzNS03Ni4wMTUNCgkJCQljMy40OS0xLjE2OSw1LjgzNy00LjQyLDUuODM3LTguMDk4VjguNTM3YzAtMi43OTktMS4zNzQtNS40MTktMy42NzgtNy4wMTRjLTIuMjg3LTEuNTk2LTUuMjIyLTEuOTYzLTcuODU5LTAuOTgxDQoJCQkJQzM0Ni44NTYsMjYuMTUsMjc3Ljc3MSw2OS4xNDEsMjc3LjA3OSw2OS41NjhjLTMuOTk0LDIuNS01LjIxNCw3Ljc2NS0yLjcxNCwxMS43NTljMi40OTIsMy45OTQsNy43NTcsNS4yMTQsMTEuNzU5LDIuNzE0DQoJCQkJYzAuNjMxLTAuNDAxLDYwLjczMi0zNy43OTQsMTIzLjQ3Ny02My4wMjd2MzMxLjI4MWMtNTguMjQ5LDIwLjI0MS0xMTkuMDY2LDUzLjI5MS0xNDUuMDY3LDY4LjA4N1Y5My44NzENCgkJCQljMC0zLjIzNC0xLjgyNi02LjE4Ny00LjcxOS03LjYzN2MtMS40NjgtMC43MjUtMzYuNDM3LTE3Ljk2My04MC42MTQtMTcuOTYzYy03Ny4xMDcsMC0xMzYuMzg4LDE2LjY4My0xMzguODgsMTcuMzk5DQoJCQkJYy0zLjY2MSwxLjA0MS02LjE4Nyw0LjM5NS02LjE4Nyw4LjIwMXYzNzUuNDY3YzAsMi42NzEsMS4yNjMsNS4xOTcsMy4zODgsNi44MWMxLjUwMiwxLjEzNSwzLjMxMSwxLjcyNCw1LjE0NiwxLjcyNA0KCQkJCWMwLjc4NSwwLDEuNTctMC4xMTEsMi4zMzgtMC4zMzNjMC41ODktMC4xNjIsNTkuNTk3LTE2LjczNCwxMzQuMTk1LTE2LjczNGMzMS4xOTgsMCw1Ny44NTYsOS43MTEsNjguMjY3LDE0LjA3MXYyMC4wNjJoLTIwNC44DQoJCQkJYy0xNC4xMTQsMC0yNS42LTExLjQ4Ni0yNS42LTI1LjZ2LTMzMi44YzAtNC43MS0zLjgyMy04LjUzMy04LjUzMy04LjUzM3MtOC41MzMsMy44MjMtOC41MzMsOC41MzN2MzMyLjgNCgkJCQljMCwyMy41MjYsMTkuMTQsNDIuNjY3LDQyLjY2Nyw0Mi42NjdoNDI2LjY2N2MyMy41MjYsMCw0Mi42NjctMTkuMTQsNDIuNjY3LTQyLjY2N3YtMzMyLjgNCgkJCQlDNTEyLjAwMiwxMzEuODI3LDUwOC4xODgsMTI4LjAwNCw1MDMuNDY5LDEyOC4wMDR6Ii8+DQoJCQk8cGF0aCBkPSJNMjkxLjA1NywxOTEuNjExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMNCgkJCQljMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2YzQuNDg5LTEuNDI1LDYuOTgtNi4yMjEsNS41NTUtMTAuNzA5Yy0xLjQxNy00LjQ4OS02LjE3OC02Ljk4OS0xMC43MDktNS41NzINCgkJCQljLTI2LjA5NSw4LjI1Mi03NS45ODEsMzMuNTk2LTc4LjA5NywzNC42NzFDMjkwLjU5NiwxODIuMjY3LDI4OC45MjQsMTg3LjQwNSwyOTEuMDU3LDE5MS42MTF6Ii8+DQoJCQk8cGF0aCBkPSJNMjkxLjA1NywyOTQuMDExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMNCgkJCQljMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2YzQuNDg5LTEuNDI1LDYuOTgtNi4yMjEsNS41NTUtMTAuNzA5Yy0xLjQxNy00LjQ4OS02LjE3OC02Ljk4OS0xMC43MDktNS41NzINCgkJCQljLTI2LjA5NSw4LjI1Mi03NS45ODEsMzMuNTk2LTc4LjA5NywzNC42NzFDMjkwLjU5NiwyODQuNjY3LDI4OC45MjQsMjg5LjgwNSwyOTEuMDU3LDI5NC4wMTF6Ii8+DQoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwxNTguMzY2Yy01Mi42OTMtMTIuMzY1LTExMi41NzIsMy4zODgtMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ni02LjAzMywxMC40NTMNCgkJCQljMS4wMjQsMy44MTQsNC40NzEsNi4zMjMsOC4yMzUsNi4zMjNjMC43MzQsMCwxLjQ3Ni0wLjA5NCwyLjIxOS0wLjI5YzAuNTcyLTAuMTYyLDU4LjIyMy0xNS4zMjYsMTA2Ljc3OC0zLjkzNA0KCQkJCWM0LjU2NSwxLjA2Nyw5LjE4Mi0xLjc3NSwxMC4yNTctNi4zNjZDMjE0LjE4OSwxNjQuMDMyLDIxMS4zMzksMTU5LjQ0MSwyMDYuNzQ4LDE1OC4zNjZ6Ii8+DQoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwyMDkuNTY2Yy01Mi42OTMtMTIuMzU2LTExMi41NzIsMy4zODgtMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ny02LjAzMywxMC40NTMNCgkJCQljMS4wMjQsMy44MTQsNC40NzEsNi4zMjMsOC4yMzUsNi4zMjNjMC43MzQsMCwxLjQ3Ni0wLjA5NCwyLjIxOS0wLjI5YzAuNTcyLTAuMTYyLDU4LjIyMy0xNS4zMjYsMTA2Ljc3OC0zLjkzNA0KCQkJCWM0LjU2NSwxLjA2Nyw5LjE4Mi0xLjc3NSwxMC4yNTctNi4zNjZDMjE0LjE4OSwyMTUuMjMyLDIxMS4zMzksMjEwLjY0MSwyMDYuNzQ4LDIwOS41NjZ6Ii8+DQoJCQk8cGF0aCBkPSJNMjkxLjA1NywzNDUuMjExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMNCgkJCQljMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2YzQuNDg5LTEuNDI1LDYuOTgtNi4yMjEsNS41NTUtMTAuNzA5Yy0xLjQxNy00LjQ4OC02LjE3OC02Ljk4OS0xMC43MDktNS41NzINCgkJCQljLTI2LjA5NSw4LjI1Mi03NS45ODEsMzMuNTk2LTc4LjA5NywzNC42NzFDMjkwLjU5NiwzMzUuODY3LDI4OC45MjQsMzQxLjAwNSwyOTEuMDU3LDM0NS4yMTF6Ii8+DQoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwyNjAuNzY2Yy01Mi42OTMtMTIuMzU2LTExMi41NzIsMy4zNzktMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ny02LjAzMywxMC40NTMNCgkJCQljMS4wMjQsMy44MTQsNC40NzEsNi4zMzIsOC4yMzUsNi4zMzJjMC43MzQsMCwxLjQ3Ni0wLjEwMiwyLjIxOS0wLjI5OWMwLjU3Mi0wLjE2Miw1OC4yMjMtMTUuMzI2LDEwNi43NzgtMy45MzQNCgkJCQljNC41NjUsMS4wNjcsOS4xODItMS43NzUsMTAuMjU3LTYuMzY2QzIxNC4xODksMjY2LjQzMiwyMTEuMzM5LDI2MS44NDEsMjA2Ljc0OCwyNjAuNzY2eiIvPg0KCQkJPHBhdGggZD0iTTIwNi43NDgsMzYzLjE2NmMtNTIuNjkzLTEyLjM2NS0xMTIuNTcyLDMuMzg4LTExNS4wODksNC4wNjJjLTQuNTQ4LDEuMjItNy4yNTMsNS44OTctNi4wMzMsMTAuNDUzDQoJCQkJYzEuMDI0LDMuODE0LDQuNDcxLDYuMzMyLDguMjM1LDYuMzMyYzAuNzM0LDAsMS40NzYtMC4xMDIsMi4yMTktMC4yOTljMC41NzItMC4xNjIsNTguMjIzLTE1LjMyNiwxMDYuNzc4LTMuOTM0DQoJCQkJYzQuNTY1LDEuMDU4LDkuMTgyLTEuNzc1LDEwLjI1Ny02LjM2NkMyMTQuMTg5LDM2OC44MzIsMjExLjMzOSwzNjQuMjQxLDIwNi43NDgsMzYzLjE2NnoiLz4NCgkJCTxwYXRoIGQ9Ik0yMDYuNzQ4LDMxMS45NjZjLTUyLjY5My0xMi4zNjUtMTEyLjU3MiwzLjM3OS0xMTUuMDg5LDQuMDYyYy00LjU0OCwxLjIyLTcuMjUzLDUuODk3LTYuMDMzLDEwLjQ1Mw0KCQkJCWMxLjAyNCwzLjgxNCw0LjQ3MSw2LjMzMiw4LjIzNSw2LjMzMmMwLjczNCwwLDEuNDc2LTAuMTAyLDIuMjE5LTAuMjk5YzAuNTcyLTAuMTYyLDU4LjIyMy0xNS4zMjYsMTA2Ljc3OC0zLjkzNA0KCQkJCWM0LjU2NSwxLjA2Nyw5LjE4Mi0xLjc3NSwxMC4yNTctNi4zNjZDMjE0LjE4OSwzMTcuNjMyLDIxMS4zMzksMzEzLjA0MSwyMDYuNzQ4LDMxMS45NjZ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
                          />
                          My Courses
                        </li>
                      </Link>
                      <li
                      //  onClick={logout_user}
                      >
                        <img
                          alt='icon'
                          src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzMwLjY2NywxOTJjNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N3YtMTI4QzM0MS4zMzMsMjMuOTM2LDMxNy40MTksMCwyODgsMEg1My4zMzNDMjMuOTE1LDAsMCwyMy45MzYsMCw1My4zMzMNCgkJCXYzODRjMCwyOS4zOTcsMjMuOTE1LDUzLjMzMyw1My4zMzMsNTMuMzMzSDI4OGMyOS40MTksMCw1My4zMzMtMjMuOTM2LDUzLjMzMy01My4zMzN2LTEyOGMwLTUuODg4LTQuNzc5LTEwLjY2Ny0xMC42NjctMTAuNjY3DQoJCQlTMzIwLDMwMy40NDUsMzIwLDMwOS4zMzN2MTI4YzAsMTcuNjQzLTE0LjM1NywzMi0zMiwzMkg1My4zMzNjLTE3LjY0MywwLTMyLTE0LjM1Ny0zMi0zMnYtMzg0YzAtMTcuNjQzLDE0LjM1Ny0zMiwzMi0zMkgyODgNCgkJCWMxNy42NDMsMCwzMiwxNC4zNTcsMzIsMzJ2MTI4QzMyMCwxODcuMjIxLDMyNC43NzksMTkyLDMzMC42NjcsMTkyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDgwLDIzNC42NjdIMTM4LjY2N2MtNS44ODgsMC0xMC42NjcsNC43NzktMTAuNjY3LDEwLjY2N1MxMzIuNzc5LDI1NiwxMzguNjY3LDI1Nkg0ODANCgkJCWM1Ljg4OCwwLDEwLjY2Ny00Ljc3OSwxMC42NjctMTAuNjY3UzQ4NS44ODgsMjM0LjY2Nyw0ODAsMjM0LjY2N3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ4Ny41MzEsMjM3LjgyNGwtNjQtNjRjLTQuMTYtNC4xNi0xMC45MjMtNC4xNi0xNS4wODMsMGMtNC4xNiw0LjE2LTQuMTYsMTAuOTIzLDAsMTUuMDgzbDU2LjQ0OCw1Ni40NDhsLTU2LjQ0OCw1Ni40NDgNCgkJCWMtNC4xNiw0LjE2LTQuMTYsMTAuOTIzLDAsMTUuMDgzYzIuMDkxLDIuMDY5LDQuODIxLDMuMTE1LDcuNTUyLDMuMTE1YzIuNzMxLDAsNS40NjEtMS4wNDUsNy41MzEtMy4wOTNsNjQtNjQNCgkJCUM0OTEuNjkxLDI0OC43NDcsNDkxLjY5MSwyNDEuOTg0LDQ4Ny41MzEsMjM3LjgyNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
                        />
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                }>
                <IconButton>
                  <Avatar style={{ height: "50px", width: "50px" }} />
                </IconButton>
              </Popover>
            </div>
          </Col>
        </Row>
        <HomeRoutes />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onLogout: () => dispatch(actions.firebaseLogout()),
// 	};
// };
// const mapStateToProps = state => {
// 	return {
// 		profile: state.auth.profile
// 	};
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeIndex));
export default HomeIndex;
