import React from 'react';
import {ListGroup, Card, Row,Col,Carousel} from "react-bootstrap";
import './Menus.css';
const Menus = () => {
    return (
        <div>
            <Row>
                <Col lg="2">
        <Card style={{ width: '18rem' }}>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>EVENTS</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <Card.Link href="#">CSE</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">CIVIL</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">MECHANICAL</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">ECE</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">EEE</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">EXTENTION ACTIVITY</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">INTERNSHIP PROGRAM</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">CERTIFICATION PROGRAM</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">CERTIFICATE COURSES</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">PARIKSHA PE CHARCHA 2.0</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">FACULTY DEVELOPMENT PROGRAM</Card.Link>
    </ListGroup.Item>
  </ListGroup>
</Card>
</Col>
<Col lg="8">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Assets/img4.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Assets/img5.jpg"
      alt="Third slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Assets/img2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
</Row>
        </div>
    );
};

export default Menus;