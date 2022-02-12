//card that will be used in students corner and other verticle views
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./EventCard.css";


function EventCard() {
  return (
   
        <Row>
          <Col className="bg-dark col-12  image-event">Image</Col>
          <Col className=" col-12 ps-0 mt-1">
            <span style={{fontWeight:"bold"}}>Hello Title</span>
            <br></br>{" "}
            <span>
              lorem4kjnl
              <br />
              sdjfojsdi
            </span>
          </Col>
         
        </Row>
      
  );
}

export default EventCard;
