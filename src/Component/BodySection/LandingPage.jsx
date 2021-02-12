import React from 'react';
import {Row, Col, Card} from "react-bootstrap"
import Menus from '../LeftBodySection/Menus'
const LandingPage = () => {
    return (
        <div>
            <Card>
           <Row>
               <Col md={4}>
               <Menus />
               </Col>
           </Row>
           </Card>
        </div>
    );
};

export default LandingPage;