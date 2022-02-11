
// TSFItem means 365
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SmallCard.css";


function TSFItem() {
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
          <hr className="mt-3" style={{color:"white"}} />
        </Row>
      
  );
}

export default TSFItem;
