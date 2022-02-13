import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ExpositionCard.css";

function ExpositionCard() {
  return (
    <Col md={6} lg={12} className="">
      <Row className="mb-3 mx-1">
        <Col lg={6} className="bg-dark image-expo">
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
        <hr className="my-3" />

      </Row>
    </Col>
  );
}

export default ExpositionCard;
