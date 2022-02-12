import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AllArticles.css";

function ArticleCard() {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "100%" }} className="my-2">
        <Card.Img className="p-3 pb-0" style={{ height: "13rem" ,objectFit:"cover" }}
          variant="top"
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"        />
        <Card.Body>
          <Card.Title className="fw-bold">Article Title</Card.Title>
          <Card.Text className="text-muted" style={{ textAlign: "justify"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content loremsedfhoisjdi ksdjfjk sdkjfhkjsd sdkjfhkjsd
            skdhfkjsd skldfjklsd kldsfjklds ljsd dklsfj 

          </Card.Text>
          <Link to={"/"} className="">Read more...</Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ArticleCard;
