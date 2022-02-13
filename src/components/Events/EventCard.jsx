//card that will be used in students corner and other verticle views
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./EventCard.css";

function EventCard(props) {
  return (
    <Col md={6} lg={6} className={`mt-3 px-0  ${props.class ? props.class : ' '}`}>
    <Card className="rounded-0">
      <Card.Body>
          <Col className="bg-dark image-event">Image</Col>
          <Col className=" ps-0 mt-1">
            <span style={{ fontWeight: "bold" }}>{props.title? props.title : " "}</span>
            <br></br>{" "}
            <span>
              {props.description?props.description: " "}
            </span><br />
          </Col>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default EventCard;
