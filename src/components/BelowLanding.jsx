import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StudentsCorner from "./StudentsCorner";
import FirstCarousel from "./FirstCarousel";
import Title from "./Title";
import News from "./News";
import TSFItem from "./TSFItem";

function BelowLanding() {
  return (
    <Container>
      <Row>
        <Col className="col-12 col-md-5 col-lg-3  ">
          <Row className="px-3 px-md-0">
            <Title>Students' Corner </Title>

            <StudentsCorner />
          </Row>
        </Col>
        <Col className="col-12 col-md-7 col-lg-9">
          <Row>
            <Col className="col ms-md-3 mx-lg-3">
              <Row className="px-3 px-md-0">
                <Title>Experts Insights</Title>

                <FirstCarousel />
              </Row>
            </Col>

            <Col className="col-12 col-md-12 col-lg-4  mx-md-3">
              <Row className="px-3 px-md-0">
                <Title>News</Title>
                <News />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="col d-md-none  d-lg-flex ms-md-3 ">
              <Row className="px-3 px-md-0">
                <Title>365 x 4 </Title>
                <Card className="rounded-0 ps-3">
                <Card.Body>
                <Row>
                  <Col className="col-12 col-md-6"> <TSFItem /></Col>
                  <Col className="col-12 col-md-6"><TSFItem /></Col>
                </Row>
                <Row>
                  <Col className="col-12 col-md-6"> <TSFItem /></Col>
                  <Col className="col-12 col-md-6"><TSFItem /></Col>
                </Row>
                </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
        <Row>
            <Col className="col d-none d-md-flex d-lg-none ms-md-3 ">
              <Row className="px-3 px-md-0">
                <Title>365 x 4 </Title>
                <Card className="rounded-0 ps-3">
                <Card.Body>
                <Row>
                  <Col className="col-12 col-md-6"> <TSFItem /></Col>
                  <Col className="col-12 col-md-6"><TSFItem /></Col>
                </Row>
                <Row>
                  <Col className="col-12 col-md-6"> <TSFItem /></Col>
                  <Col className="col-12 col-md-6"><TSFItem /></Col>
                </Row>
                </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
      </Row>
    </Container>
  );
}

export default BelowLanding;
