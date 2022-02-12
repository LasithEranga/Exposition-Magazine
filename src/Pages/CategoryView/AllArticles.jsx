import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AllArticles.css";
import ArticleCard from "./ArticleCard";

function AllArticles() {
  return (
    <Container>
      <Row >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        
      </Row>
    </Container>
  );
}

export default AllArticles;
