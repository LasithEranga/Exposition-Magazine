import React from "react";
import { Col, Row } from "react-bootstrap";
import NextArticleCard from "./NextArticleCard";
import PreviousArticleCard from "./PreviousArticleCard";

function NextArticles() {
  return (
    <div>
      <Row>
        <Col className=" d-md-block col-12">
            <PreviousArticleCard />
        </Col>
        <Col className=" d-md-block col-12">
          
            <NextArticleCard />
          
        </Col>
      </Row>
    </div>
  );
}

export default NextArticles;
