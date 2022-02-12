import React from "react";
import SpiritCard from "./SpiritCard";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SmallCard from "./SmallCard";
import News from "./News";
import Title from "./Title";
import "./SectionFour.css";

//sets the section 4 view the spirit and events section
//creates two cards and use spirit card and small card components

function SectionFour() {
  return (
    <Container className="">
      <Row>
        <Col className="col-12 col-lg-9">
          <Row className="px-4 px-lg-0 me-lg-2">
            <Title>Spirits</Title>
            <Card className="px-3 pt-1 rounded-0">
              <Card.Body className="spirit mb-2">
                <SpiritCard />
                <SpiritCard />
                <SpiritCard />
                
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col className="col-12 col-lg-3 ">
          <Row className="px-4 px-lg-0">
            <Title>Exposition</Title>

            <Card className="rounded-0">
              <News />
            </Card>

            <Title>Popular</Title>
            <Card className="rounded-0">
              <News />
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionFour;
