//section that shows the empowering partner banner
import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import batch from "../images/batch.jpg";
import Title from "./Title";

function Team() {
  return (
    <Container className="p-0">
      <Row className="px-4 px-lg-0">
        <Title>Exposition Team</Title>
        <Card className="rounded-0">
          <Card.Body className="px-1 rounded-0">
            <Image src={batch} fluid />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Team;
