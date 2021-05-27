import React from "react";
import { Row, Col, Button } from "antd";
// import { withRouter } from 'react-router-dom'
// import DynamicTitle from '../../../../../components/DynamicTitle'
// import firebase from "../../../../../Firebase/FirebaseConfig";
// import 'firebase/storage';
// import { connect } from 'react-redux';
import Liked from "../../../../../Components/NotificationCard/Liked/Liked";
import Comment from "../../../../../Components/NotificationCard/Comment/Comment";
// import Accepted from "../../../../../components/NotificationCard/FriendRequest/FriendRequestAccepted/Accepted";
// import Recieved from "../../../../../components/NotificationCard/FriendRequest/FriendRequestRecieved/Recieved";
import Welcome from "../../../../../Components/NotificationCard/Welcome/Welcome";

// const db = firebase.firestore();

export class Notification extends React.Component {
  state = {
    notifications: [],
    lastPostDate: "-1",
    savedDate: "",
    isMobile: null,
  };

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth < 1200,
    });
    // var docRef = db.collection("Notifications").doc(this.props.profile.username);
    // docRef.get().then(doc=>{
    // 	if(doc.exists){
    // 		var last_seen= doc.get("last_notification_time")
    // 		this.callNotifications(docRef, last_seen)

    // 	}
    // 	else{
    // 		var newDocRef = db.collection('Notifications').doc(this.props.profile.username);
    //             var newLastSeen = new Date().getTime()
    // 		newDocRef.set({
    // 			last_notification_time:newLastSeen
    // 		})
    // 		newDocRef.collection('notifications').add({
    // 			body:"Welcome to CitizenChoice , discover new learning while intracting with others",
    // 			timestamp: new Date().getTime(),
    // 			type:5
    // 		  })
    // 		this.callNotifications(docRef, newLastSeen)
    // 	}
    // }).catch(err=>{
    // 	console.log(err)
    // })

    //   setTimeout(()=>{
    // 	this.changeLastSeen()
    // }, 3000)
  }

  // callNotifications(docRef, last_seen){
  // 	docRef.collection("notifications").orderBy("timestamp" ,"desc")
  // 			.onSnapshot((querySnapshot) => {
  // 				var no_of_notifications=0
  // 				var notificationsArray=[]
  // 				querySnapshot.forEach((doc) => {

  // 					// doc.data() is never undefined for query doc snapshots
  // 					if(doc.data().timestamp>=last_seen){

  // 						notificationsArray.push({...doc.data(), seen:false})
  // 						no_of_notifications=no_of_notifications+1
  // 					}
  // 					else
  // 						notificationsArray.push({...doc.data(), seen:true})
  // 				});
  // 				this.setState({notifications:notificationsArray })

  // 			})
  // }

  // changeLastSeen =()=>{
  // 	console.log("last seen updated")
  // 	var docRef = db.collection("Notifications").doc(this.props.profile.username);
  // 	docRef.update({
  // 		last_notification_time: new Date().getTime()
  // 	})
  // }

  notificationMessageHandler = (notification) => {
    if (notification.type === 0) {
      return <Liked notification={notification} />;
    }
    if (notification.type === 1) {
      return <Comment notification={notification} />;
    }
    // if (notification.type === 3) {
    //   return <Accepted notification={notification} />;
    // }
    // if (notification.type === 4) {
    //   return <Recieved notification={notification} />;
    // }
    if (notification.type === 5) {
      return <Welcome notification={notification} />;
    }
  };

  render() {
    const notification = this.state.notifications.map((notification) => {
      let message = this.notificationMessageHandler(notification);
      return <div>{message}</div>;
    });

    return (
      <React.Fragment>
        {/* 	<DynamicTitle title="Notification | CitizenChoice" /> */}
        <Row>
          <Col xl={2} lg={1} md={1} sm={0} />
          <Col id='infiniteScroll' xl={13} lg={15} md={16} sm={20} xs={24}>
            {notification}
            <div style={{ textAlign: "center", margin: "1rem 0" }}>
              <Button
              //  onClick={() => this.setState({ lastPostDate: this.state.savedDate })}
              >
                Load more
              </Button>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
// 	return {
// 		profile: state.auth.profile
// 	};
// };

// export default withRouter(connect(mapStateToProps)(Notification));
export default Notification;
