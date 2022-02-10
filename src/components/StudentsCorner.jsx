import React from "react";
import Container from "react-bootstrap/Container";
import SmallCard from "./SmallCard";
import Card from "react-bootstrap/Card";
import './StudentCorner.css'

function StudentsCorner(props) {
  return (
      <Card className={"border-0 ps-2 pt-2 rounded-0 " + props.className}  >
        <Card.Body className=" student-corner-container ">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Card.Body>
      </Card>
  );
}

export default StudentsCorner;
