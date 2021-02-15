import React from 'react';
import {ListGroup, Card, Row,Col,Carousel } from 'react-bootstrap'
const Civil = () => {
    return (
        <div>
             <Row>
                <Col lg="2">
        <Card style={{ width: '18rem' }}>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>CIVIL EVENTS</Card.Header><br></br>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2016-17</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <Card.Link href="#">Guest Lecture On Innovative Water</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">Conservation Practice</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2017-18</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">Workshop On Recent Trends</Card.Link>
    </ListGroup.Item>
    </ListGroup>
</Card>
</Col>
<Col lg="8">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Assets/civil.png"
      alt="First slide"
    />
   
  </Carousel.Item>
  </Carousel>

</Col>
</Row>
        </div>
    );
};

export default Civil;