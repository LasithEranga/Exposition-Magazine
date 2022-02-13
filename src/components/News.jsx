import React from "react";
import SmallCard from "./SmallCard";
import Card from "react-bootstrap/Card";
import './StudentCorner.css'

function News() {
  return (
      <Card className="border-0 ps-2 pt-0 border-0 rounded-0">
        <Card.Body className=" student-corner-container ">
          <SmallCard class="sm-card"/>
          <SmallCard class="sm-card"/>
          <SmallCard class="sm-card"/>
          <SmallCard class="sm-card"/>
          
        </Card.Body>
      </Card>
  );
}

export default News;