import React from 'react';

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
    <Card.Link href="#">Workshop On Adobe Device Days</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2016-17</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">Workshop On Android Development</Card.Link>
    </ListGroup.Item>
    <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>2017-18</Card.Header>
    <ListGroup.Item>
    <Card.Link href="#">Workshop On Linux</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">Guest Lecture On ADS and CN</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">Guest Lecture On DBMS</Card.Link>
    </ListGroup.Item>
    </ListGroup>
</Card>
</Col>
</Row>
        </div>
    );
};

export default Ece;