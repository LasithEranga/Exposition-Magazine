import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AllArticles.css";

function ArticleCard(props) {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "100%" }} className="my-2">
        <Card.Img
          className="p-3 pb-0"
          style={{ height: "13rem", objectFit: "cover" }}
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{props.title}</Card.Title>
          <Card.Text className="text-muted" style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Link to={`/${props.category}/${props.id}`} className="">
            Read more...
          </Link>
        </Card.Body>
      </Card>
    </Col>
    
  );
}

export default ArticleCard;
