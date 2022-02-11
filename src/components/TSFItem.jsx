
// TSFItem means 365
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TSFItem.css";


function TSFItem() {
  return (
   
        <Row className="py-1 py-md-2">
          <Col className="bg-dark col-12 col-md-5 image-tsf">Image</Col>
          <Col className="px-0 ps-md-3 col-12 col-md-7 mb-3">
            <span style={{fontWeight:"bold"}}> Djskhfjks skdjfhjk </span>
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

export default TSFItem;
