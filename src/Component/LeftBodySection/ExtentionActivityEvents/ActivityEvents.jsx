import React from 'react';
import {Button,Row,Col,Card,} from 'react-bootstrap'
const ActivityEvents = () => {
    return (
        <div>
                       <Row>
                <Col lg="2">
        <Card style={{ width: '18rem' }}>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>EXTENSION ACTIVITIES</Card.Header>
  </Card>
  </Col>
  </Row>
              <Button variant="primary" href="pdf/extension activities.pdf">
    Extension Activity Events
  </Button>
        </div>
    );
};

export default ActivityEvents;