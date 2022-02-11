import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ExpertInsightCard.css";
import expertimg from "../images/expertimg.png"

function ExpertInsightCard() {
  const styles = {marginTop:"20px", marginBottom:"10px"};

  return (
    <Row>
      <div className="d-flex mt-3">
        <Col className=" col-12 col-md-4 image-expert">
        <img
                src={expertimg}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
        </Col>
        <Col className=" col-12 col-md-8 ms-lg-3">
          <span>iChair: A Smart Chair as a Companion </span>
          <br />
          <span>
            Dr. Janaka Wijekoon (Visiting Lecturer - Department of Industrial
            Management, University of Kelaniya
          </span>
        </Col>
      </div>
      <div>
        <hr style={styles} />
      </div>
    </Row>
  );
}

export default ExpertInsightCard;
