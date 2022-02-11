import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ExpertInsightCard.css";
import expertimg from "../images/expertimg.png"

function ExpertInsightCard() {
  const styles = {marginTop:"20px", marginBottom:"10px"};

  return (
    <Row>
      <div className="d-flex mt-1">
        <Col className=" col-12 ms-lg-3 pb-5">
          <h4>iChair: A Smart Chair as a Companion </h4>
          <span>
            Dr. Janaka Wijekoon (Visiting Lecturer - Department of Industrial
            Management, University of Kelaniya
          </span>
        </Col>
      </div>
      <div>
        
      </div>
    </Row>
  );
}

export default ExpertInsightCard;
