import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import './Menus.css';
const Menus = () => {
    return (
        <div>
            <ListGroup className="list">
  <ListGroup.Item className="btn">CSE</ListGroup.Item>
  <ListGroup.Item className="btn">CIVIL</ListGroup.Item>
  <ListGroup.Item className="btn">MECHANICAL</ListGroup.Item>
  <ListGroup.Item className="btn">ECE</ListGroup.Item>
  <ListGroup.Item className="btn">EEE</ListGroup.Item>
  <ListGroup.Item className="btn">EXTENSION ACTIVITIES</ListGroup.Item>
  <ListGroup.Item className="btn">INTERSHIP PROGRAM</ListGroup.Item>
  <ListGroup.Item className="btn">CERTIFICATION PROGRAM</ListGroup.Item>
  <ListGroup.Item className="btn">CERTIFICATION COURSES</ListGroup.Item>
  <ListGroup.Item className="btn">PARIKSHA PE CHARCHA 2.0</ListGroup.Item>
  <ListGroup.Item className="btn">FACULTY DEVELOPMENT PROGRAM</ListGroup.Item>
</ListGroup> 
        </div>
    );
};

export default Menus;