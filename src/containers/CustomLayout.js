import React, { Component } from "react";
import AuthLayout from "./Auth/AuthLayout";
// import UnAuthLayout from "./unAuth/UnAuthLayout";
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux';
// import * as actions from '../store/actions/index';
// import Loading from "../Components/skeleton/loading/Loading";

class CustomLayout extends Component {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		displayed_form: '',
  // 		isAuthenticated: false,
  // 		username: '',
  // 		error: null
  // 	}
  // }
  // authenticate=(isAuthenticated)=>{
  // 	// this.props.history.push("/");
  // }
  // handle_logout = () => {
  // 	this.props.onLogout();
  // 	this.props.history.push("/");
  // };
  // componentDidMount() {
  // 	const {history} = this.props;
  // 	this.props.onTryAutoSignup(history);
  // }
  // componentDidUpdate(prevProps, prevState) {
  // 	if(prevProps.authRedirectPath!==this.props.authRedirectPath){
  // 		console.log("login.js update as authRedirectPath is changed")
  // 		this.props.history.push(this.props.authRedirectPath)
  // 	}
  // }

  render() {
    // let website;
    // if (this.props.loading) {
    //   website = <Loading />;
    // } else {
    //   if (this.props.isAuthenticated) {
    //     website = (
    //       <AuthLayout user={this.state.username} logout={this.handle_logout} />
    //     );
    //   } else {
    //     website = (
    //       <UnAuthLayout
    //         authenticate={this.authenticate}
    //         error={this.state.error}
    //       />
    //     );
    //   }
    // }
    return (
      <React.Fragment>
        {" "}
        <AuthLayout />
      </React.Fragment>
    );
  }
}
// const mapStateToProps = state => {
// 	return {
// 		loading: state.auth.loading,
// 		error: state.auth.error,
// 		isAuthenticated: state.auth.token !== null,
// 		authRedirectPath: state.auth.authRedirectPath
// 	};
// };
// const mapDispatchToProps = dispatch => {
// 	return {
// 		onTryAutoSignup: (history) => dispatch(actions.authCheckState(history)),
// 		onLogout: () => dispatch(actions.firebaseLogout()),
// 	};
// };
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomLayout));
export default CustomLayout;
