import React from "react";
import Container from "react-bootstrap/Container";
import SmallCard from "./SmallCard";
import Card from "react-bootstrap/Card";
import './StudentCorner.css'

function StudentsCorner() {
  return (
    <Container 
      className="bg-light mt-5"
      style={{ height: "auto", width: "30%" }}
    >
      <Card className="border-0 ps-2 pt-2">
        <Card.Body className=" student-corner-container ">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default StudentsCorner;
