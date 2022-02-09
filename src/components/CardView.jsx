import React from "react";
import Card from 'react-bootstrap/Card';


function CardView() {
  return (
    <div>
    <Card style={{  height:"10rem" }} className="me-3 ">
      <Card.Img variant="top" src="" />
    </Card>
    <p style={{ fontWeight:"bold", fontSize:"1rem" }}>Deshabandu W. K. H. Wegapitiya </p>
    </div>
  );
}

export default CardView;
