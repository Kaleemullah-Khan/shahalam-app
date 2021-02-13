import React from 'react';
import {ListGroup, Card, Row,Col} from 'react-bootstrap'
const Civil = () => {
    return (
        <div>
             <Row>
                <Col lg="2">
        <Card style={{ width: '18rem' }}>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>CSE EVENTS</Card.Header><br>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2013-14</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <Card.Link href="#">Workshop On cyber Security</Card.Link>
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
        </div>
    );
};

export default Civil;