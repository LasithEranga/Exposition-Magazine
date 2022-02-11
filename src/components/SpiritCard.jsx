import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './SpiritCard.css';


function SpiritCard() {
  return (
    <Row>
      <Col className="bg-dark col-12 col-md-6 image-spirit">Image</Col>
      <Col className=" col-12 col-md-6">
        <span>Hello Title</span>
        <br></br>{" "}
        <span>
          lorem4kjnl
          <br />
          sdjfojsdi
        </span>
      </Col>
      <hr className="my-4" />
    </Row>
  );
}

export default SpiritCard;
