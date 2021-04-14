import "./styles.css";
import React from "react";
import Root from "./Components/Root/Root";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Col, Row } from "antd";



var components = [
  {
    type: "md",
    content: "When \\(a \ne 0\\), there are two solutions to \(ax^2 + bx + c = 0\) and they are \[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
  },
  {
    type: "image",
    src: "This is image"
  },
  {
    type: "md",
    content: `~~~mermaid
    graph TB
    A[input]-->B[College]
    B-- Exclude -->C[Region]
    B-- Include -->D[Branch]
    D-->E[Output]
    C-- Include -->F[Branch]
    C-- Exclude -->G[Nearest Regions Top 3]
    F-- Include -->H[Pick Students Uniformly from selection]
    F-- Exclude --> L[Pick Students Randomly From that Region]
    G-->I[Branch]
    I-- Include -->J[Pick Students Uniformly from selection]
    I -- Exclude -->K[Pick Students Randomly]
    ~~~

    ~~~ py
    x=10
    ~~~
    `
  }
];



export default function App() {

  
  return (
    <Row  justify="center">
      <Col lg={12}>
        <br/><br/>
        <Root/>
      </Col>
       
    </Row>

   
  );
}
