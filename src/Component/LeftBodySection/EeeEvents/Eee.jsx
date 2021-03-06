import React from 'react';
import {ListGroup, Card, Row,Col,Carousel} from 'react-bootstrap'
const Eee = () => {
    return (
        <div>
            <Row>
                <Col lg="2">
        <Card style={{ width: '18rem' }}>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>EEE EVENTS</Card.Header><br></br>
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2014-15</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <Card.Link href="#">WS On Power System Application Using Mi Power</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2015-16</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">Workshop On Mi Power System </Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2017-18</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">Reactive Power Management</Card.Link>
    </ListGroup.Item>
    </ListGroup>
</Card>
</Col>
<Col lg="8">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Assets/eee.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  </Carousel>

</Col>
</Row>
        </div>
    );
};

export default Eee;