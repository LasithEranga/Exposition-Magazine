//section that shows the empowering partner banner
import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import banner from "../images/banner.jpg";
import Title from "./Title";

function SectionFive() {
  return (
    <Container className="">
      <Row className="px-3 px-lg-0">
        <Title>Empowering Partner - MAS</Title>
        <Card className="rounded-0 p-0">
          <Card.Body className="p-x1rounded-0">
            <Image src={banner} width={"100%"} loading="lazy"/>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default SectionFive;
