import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardView(props) {
  return (
    <Link to={`/articles/${props.id}`} ><div>
      <Card style={{ height: "15rem" }} className="me-3 ">
        <Card.Img variant="top" src={props.image ? props.image : ""} style={{objectFit:'cover', width:'100%',height:'100%'}} />
      </Card>
      <p className="text-dark" style={{ fontWeight: "bold", fontSize: "1rem" ,color:'#212529'}}>
        { 
        props.title ? props.title : ""}
      </p>
    </div></Link>
  );
}

export default CardView;
