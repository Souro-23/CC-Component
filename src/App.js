import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";
import PathList from "./Components/Paths/PathList";
import CardList from "./Components/Cards/CardList";
import Subtopic from "./Components/SubtopicModule/Subtopic";

const { Content, Footer, Sider } = Layout;

const App = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerToggleHandler = (collapsed) => {
    setShowSideDrawer(!collapsed);
  };
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        collapsed={!showSideDrawer}
        onCollapse={(collapsed, type) => {
          sideDrawerToggleHandler(collapsed);
        }}
        style={{
          position: "fixed",
          height: "100vh",
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content>
          <div className="sitelayoutbackground">
            <Router>
              <Route path="/path" exact component={CardList} />
              <Route path="/path/:id" component={PathList} />
              <Route path ="/" component={Subtopic}/>
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          CitizenChoice ©2020 Created by react
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
