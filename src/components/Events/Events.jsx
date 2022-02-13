import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Title from "../Title";
import TSFItem from "../TSFItem";
import EventCard from "./EventCard";
import CarouselView from "./CarouselView";

function Events() {
  return (
    <Container className="px-md-0">
      <Title>Events</Title>
      <Row className="mx-0">
        <Col className="col">
          <Row>
            <CarouselView />
          </Row>
        </Col>

        <Col className="col-12 col-md-6 ms-md-3">
          <Row className="mb-3 ">
            <EventCard
              title="Hackx|2021"
              class=" mt-md-0 pe-md-2"
              description="Inter-University Hackothan"
            />
            <EventCard
              title="Rasoga|2K21"
              class=" mt-md-0 ps-md-2"
              description="Inter-University Hackothan"
            />
            <EventCard
              title="InfoStudio|2021"
              class=" pe-md-2"
              description="Inter-University Hackothan"
            />
            <EventCard
              title="HackxJr|2021"
              class=" ps-md-2"
              description="Inter-University Hackothan"
            />
          </Row>
        </Col>
        {/* <Card className="rounded-0 mt-3">
          <Card.Body>
            <Row className="mx-0">
              <Col className="col-12 col-md-6">
                <TSFItem />
              </Col>
              <Col className="col-12 col-md-6">
                <TSFItem />
              </Col>
            </Row>
          </Card.Body>
        </Card> */}
      </Row>
    </Container>
  );
}

export default Events;
