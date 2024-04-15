import React, { useState, useRef, useEffect } from "react";
import "../../styles.css";

import EmbedSDKInit from "../common/EmbedInit";

import { Col, Container, Row, Tabs, Tab, Nav, Form, Button } from "react-bootstrap";

import EmbedDashboard from "../EmbedDashboard/EmbedDashboard";
import EmbedDashboard2 from "../EmbedDashboard/EmbedDashboard2";
import EmbedDashboard3 from "../EmbedDashboard/EmbedDashboard3";
import EmbedDashboard4 from "../EmbedDashboard/EmbedDashboard4";
import EmbedDashboard5 from "../EmbedDashboard/EmbedDashboard5";
const ProcessContent = [
  {
    num: 1,
    className: "numb tran3s",
    heading: "Filter Gender",
    desc:
      "Filter by male of female according to icons.",
    dataDelay: "",
  },
  {
    num: 2,
    className: "numb tran3s",
    heading: "Filter Traffic Source",
    desc:
      "Filter by traffic source according to icons.",
    dataDelay: "50",
  },
  {
    num: 3,
    className: "numb tran3s",
    heading: "Filter by U.S. State",
    desc:
      "Filter by state. Select pin and you will see a list of letters that shows each state.",
    dataDelay: "100",
  },
];

function BootstrapTabsVertical() {
  EmbedSDKInit();



  return (

   <Container fluid className="p-0 dashboard position-relative">


     <Row>
       <Col sm={12} md={12}>

       <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
           <Row>
             <Col lg={3} sm={12}>
               <Nav variant="pills" className="flex-column">
                 <Nav.Item>
                   <Nav.Link eventKey="dashboard"><i class="fas fa-chart-bar"></i>Dashboard</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="user-profile"><i class="far fa-user"></i>User Profile</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="company-profile"><i class="fas fa-landmark"></i>Company Profile</Nav.Link>
                 </Nav.Item>

               </Nav>
             </Col>
             <Col lg={9} sm={12}>
               <Tab.Content>
                 <Tab.Pane eventKey="dashboard">
                  <h2>Dashboard</h2>

                  <EmbedDashboard/>
                 </Tab.Pane>
                 <Tab.Pane eventKey="user-profile">
                   <h2>User Profile</h2>
                   <EmbedDashboard2/>
                 </Tab.Pane>
               </Tab.Content>
               <Tab.Pane eventKey="company-profile">
                   <h2>Company Profile</h2>
                   <EmbedDashboard4/>
               </Tab.Pane>

             </Col>
           </Row>
         </Tab.Container>

       </Col>

     </Row>





     </Container>

  );
}

export default BootstrapTabsVertical;
