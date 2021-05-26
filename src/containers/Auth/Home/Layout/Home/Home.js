import React from "react";
import { Col, Row } from "antd";
// import AddFeed from "../../../Post/Add Post/AddFeed";
import "./Home.css";
// import { Get_timeline, Post } from '../../../../../Constants/ApiUrls';
import Suggestions from "./SuggestedCourses/Suggestions";
// import DynamicTitle from '../../../../../components/DynamicTitle'
// import InfinitePost from '../../../Post/Infinite Post/InfinitePost';
// import { withRouter } from 'react-router';
// import { connect } from 'react-redux';
// import EmptyTimeline from './EmptyTimeline/EmptyTimeline'
// import SinglePost from '../../../Post/SinglePost/SinglePost';

class Home extends React.Component {
  state = {
    newPost: null,
    empty: false,
  };
  // savePost = (data) => {
  // 	this.setState({ newPost:data })
  // }
  // empty = (value) => {
  // 	this.setState({ empty: value })
  // }

  render() {
    return (
      <React.Fragment>
        {/* <DynamicTitle title="Home | CitizenChoice"/> */}
        <Row justify='center'>
          <Col id='infiniteScroll' xl={11} lg={15} md={15} sm={24} xs={24}>
            {/* 		{this.props.singlePost?
						<SinglePost {...this.props}/>
						:
						<>
						<AddFeed 
						child='Whats in your mind ?' 
						save={this.savePost} 
						user={this.props.profile} 
						url={Post} />
						<InfinitePost isEmpty={this.empty} preUrl={Get_timeline} newPost={this.state.newPost} postUrl="/-1/"/>
						{this.state.empty && <EmptyTimeline />}
						</>} */}
          </Col>
          <Col xl={8} lg={9} md={9} sm={0} xs={0}>
            <Suggestions isEmpty={this.state.empty} />
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
// export default withRouter(connect(mapStateToProps)(Home));
export default Home;
