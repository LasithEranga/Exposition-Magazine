//card that will be used in students corner and other verticle views
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./SmallCard.css";


function SmallCard() {
  return (
   
        <Row>
          <Col className="bg-dark col-12 col-md-6 image-height">Image</Col>
          <Col className=" col-12 col-md-6">
            <span>Hello Title</span>
            <br></br>{" "}
            <span>
              lorem4kjnl
              <br />
              sdjfojsdi
            </span>
          </Col>
          <hr className="mt-3" />
        </Row>
      
  );
}

export default SmallCard;
