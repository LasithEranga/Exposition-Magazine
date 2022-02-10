import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentsCorner from "./StudentsCorner";
import FirstCarousel from "./FirstCarousel";
import Title from "./Title";
import News from "./News";

function BelowLanding() {
  return (
    <Container>
      <Row>
        <Col className="col-12 col-md-3  ">
          <Row className="px-3 px-md-0">
            <Title>Students' Corner </Title>

            <StudentsCorner />
          </Row>
        </Col>

        <Col className="col  mx-md-3">
          <Row className="px-3 px-md-0">
            <Title>Experts Insights</Title>

            <FirstCarousel  />
          </Row>
        </Col>

        <Col className="col-12 col-md-3  ">
          <Row className="px-3 px-md-0">
            <Title>News</Title>
            <News />
          </Row>
          <Row className="mt-md-4 px-3 px-md-0">
          <Title>365 x 4 </Title>
            <News />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BelowLanding;
