import React from "react";
import SmallCard from "./SmallCard";
import Card from "react-bootstrap/Card";
import './StudentCorner.css'

function News() {
  return (
      <Card className="border-0 ps-2 pt-2 border-0">
        <Card.Body className=" student-corner-container ">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Card.Body>
      </Card>
  );
}

export default News;