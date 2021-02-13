import React from 'react';

const Mechanical = () => {
    return (
        <div>
              <Row>
                <Col lg="2">
        <Card style={{ width: '18rem' }}>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>MECHANICAL EVENTS</Card.Header><br></br>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2015-16</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <Card.Link href="#">3_D Printing</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2016-17</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">HVAC Crash Course</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2017-18</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">Workshop On Recent Trends</Card.Link>
    </ListGroup.Item>
    </ListGroup>
</Card>
</Col>
</Row>
        </div>
    );
};

export default Mechanical;