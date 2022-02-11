import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Title from "./Title";

function Events() {
  return (
    <Container className="p-md-0">
      <Row className="px-4 px-lg-0">
        <Title>Events</Title>
        <Card className="rounded-0">
          <Card.Body className="px-1 rounded-0">
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Events;