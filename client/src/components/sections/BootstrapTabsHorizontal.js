
import React, { useState, useRef, useEffect } from 'react';
import { Tabs, Container, Tab, Col, Row } from 'react-bootstrap';
import EmbedDashboard from "../EmbedDashboard/EmbedDashboard";
import EmbedDashboard2 from "../EmbedDashboard/EmbedDashboard2";
import EmbedDashboard3 from "../EmbedDashboard/EmbedDashboard3";
import EmbedDashboard4 from "../EmbedDashboard/EmbedDashboard4";
import EmbedDashboard5 from "../EmbedDashboard/EmbedDashboard5";

function BootstrapTabsHorizontal() {

const [key, setKey] = useState('home');

return (


<Container fluid className="p-5">

      <div id="home">

        <Tabs
         id="controlled-tab-example"
         activeKey={key}
         onSelect={(k) => setKey(k)}
         className="mb-3"
       >
         <Tab eventKey="home" title="Tab 1">
           <EmbedDashboard/>
         </Tab>
         <Tab eventKey="profile" title="Tab 2">
          <EmbedDashboard2/>
         </Tab>
         <Tab eventKey="contact" title="Tab 3">
          <EmbedDashboard4/>
         </Tab>
       </Tabs>

     </div>

     </Container>

)

}

  export default BootstrapTabsHorizontal;
