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
    <Container className=" p-0">
      <Row>
        <Col className="col-9">
          <Title>Spirits</Title>
          <Card className="px-3 pt-1 rounded-0">
            <Card.Body className="spirit">
              <SpiritCard />
              <SpiritCard />
              <SpiritCard />
              <p className="text-center pb-4">
              <Button className="mt-5 mb-3 lg" size="lg" variant="outline-secondary">
                View All Articles
              </Button>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3 ">
          <Title>Exposition</Title>

          <Card className="rounded-0">
            <News />
          </Card>

          <Title>Popular</Title>
          <Card className="rounded-0">
            <News />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionFour;
