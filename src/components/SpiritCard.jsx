import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SpiritCard.css";

function SpiritCard() {
  return (
    <Col md={6} lg={12} className="">
      <Row className="mb-3 mx-md-0">
        <Col lg={6} className="bg-dark image-spirit">
          Image
        </Col>
        <Col lg={6} className=" ">
          <span>Hello Title</span>
          <br></br>
          <span>
            lorem4kjnl
            <br />
            sdjfojsdi
          </span>
        </Col>
        <hr className="mt-4 " />

      </Row>
    </Col>
  );
}

export default SpiritCard;


