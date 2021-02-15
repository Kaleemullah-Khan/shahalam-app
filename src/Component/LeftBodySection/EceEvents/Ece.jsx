import React from 'react';
import {ListGroup, Card, Row,Col,Carousel} from 'react-bootstrap'
const Ece = () => {
    return (
        <div>
             <Row>
                <Col lg="2">
        <Card style={{ width: '18rem' }}>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>ECE EVENTS</Card.Header><br></br>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2013-14</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <Card.Link href="#">Seminar On Satellite and Optical Communication</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2014-15</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">Seminar On Wireless Communication and Networking</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2015-16</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">TT On 'IOT In Robotics'</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2016-17</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">WS On Digital VLSI System</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2017-18</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">GL On 'Digital Image Processing'</Card.Link>
    </ListGroup.Item>
    
    </ListGroup>
</Card>
</Col>
<Col lg="8">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Assets/ece.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  </Carousel>

</Col>
</Row>
        </div>
    );
};

export default Ece;