import React, { Component } from 'react'
import { Col, Layout, Menu, Row } from 'antd';
import './App.css'
import PostCard from './Components/PostCard';

const { Content, Footer, Sider } = Layout;

const dummyData={
  images:[
    "https://testccserver.s3.amazonaws.com/media/feeds/images/AMAZON-PLACEMENT-MATERIAL.jpeg",
    "https://testccserver.s3.amazonaws.com/media/feeds/images/d86bac5b-b105-47a5-a228-0bb7e442c185.jpg",
    "https://testccserver.s3.amazonaws.com/media/feeds/images/GRAPECITY.jpeg"
]
}



export class App extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = (collapsed) => {
    this.setState((prevState) => {
      return { showSideDrawer: !collapsed };
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
          }}
          collapsed={!this.state.showSideDrawer}
          onCollapse={(collapsed, type) => {
            this.sideDrawerToggleHandler(collapsed)
          }}
          style={{
            position: 'fixed',
            height: '100vh'
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
              Home
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout >
          <Content >
            <div className="sitelayoutbackground" style={{ minHeight: 360 }}>
              <Row justify="center">
                <Col xl={2} lg={0} md={0} sm={0} />
                <Col
                  xl={13}
                  lg={15}
                  md={16}
                  sm={20}
                  xs={24}>
                  <br/><br/>
                  <PostCard data={dummyData}/>
                </Col>
                <Col xl={9} lg={9} md={7} sm={0} xs={0} >
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Citizen Choice ©2020 Created by react</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App

