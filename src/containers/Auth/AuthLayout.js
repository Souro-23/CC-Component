import React, { Component } from "react";
import classes from "./AuthLayout.module.css";
import "./AuthLayout.css";
import { Layout, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

import Backdrop from "../../Components/Backdrop/Backdrop";
// import { connect } from 'react-redux';
// import * as actions from '../../store/actions/index';
import Footer from "../../Components/Footer/Footer";

import { PrivateRoute } from "../../Routes/Routes";
const { Content, Sider } = Layout;

class AuthLayout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = (collapsed) => {
    this.setState((prevState) => {
      return { showSideDrawer: !collapsed };
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          className={classes.slider}
          onBreakpoint={(broken) => {}}
          collapsed={!this.state.showSideDrawer}
          onCollapse={(collapsed, type) => {
            this.sideDrawerToggleHandler(collapsed);
          }}
          style={{
            position: "fixed",
            height: "100vh",
          }}>
          <div className={classes.logo}>CitizenChoice</div>

          <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
            <Menu.Item key='1'>
              <Link exact to='/'>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link exact to='/course'>
                My Courses
              </Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link exact to='/My-pages'>
                My Pages
              </Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link exact to={{ pathname: "/my-account/myUsername" }}>
                Account
              </Link>
            </Menu.Item>
            <Menu.Item key='5'>Logout</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <div
              className={classes.sitelayoutbackground}
              style={{ minHeight: 360 }}>
              <Backdrop
                show={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}
              />
              <div style={{ minHeight: "700px" }}>
                <PrivateRoute />
              </div>
              <Footer />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     loading: true,
//     error: state.auth.error,
//     isAuthenticated: state.auth.token !== null,
//     authRedirectPath: state.auth.authRedirectPath,
//     profile: state.auth.profile
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onSignupAuth: (data) => dispatch(actions.signupAuth(data)),
//     onSetAuthRedirectPath: (redirectPath) => dispatch(actions.setAuthRedirectPath(redirectPath))
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthLayout));
export default AuthLayout;
