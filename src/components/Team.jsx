//section that shows the empowering partner banner
import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import batch from "../images/batch.webp";
import Title from "./Title";
import { motion } from "framer-motion";

function Team() {
  return (
    <Container className="">
      <Row className="px-3 px-lg-0" >
        <Title>Exposition Team</Title>
        <Card className="rounded-0">
          <Card.Body className=" rounded-0" as={motion.div} whileHover={{scale:1.03}}>
            <Image src={batch} fluid loading="lazy"/>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Team;
