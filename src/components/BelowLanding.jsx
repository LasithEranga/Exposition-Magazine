import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentsCorner from "./StudentsCorner";
import FirstCarousel from "./FirstCarousel";
import News from "./News";

function BelowLanding() {
  return (
    <Container>
      <Row>
        <Col className="col-12 col-md-3  ">
          <Row>
            <StudentsCorner />
          </Row>
        </Col>

        <Col className="col  mx-2">
            <Row>
                <FirstCarousel />
            </Row>
        </Col>

        <Col className="col-12 col-md-3  ">
          <Row>
            <News />
          </Row>
          <Row className="mt-4">
            <News />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BelowLanding;
