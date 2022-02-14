import React from "react";
import { Col, Row } from "react-bootstrap";
import NextArticleCard from "./NextArticleCard";
import PreviousArticleCard from "./PreviousArticleCard";

function NextArticles() {
  return (
    <div>
      <Row>
        <Col>
            <PreviousArticleCard />
        </Col>
        <Col>
          
                <NextArticleCard />
          
        </Col>
      </Row>
    </div>
  );
}

export default NextArticles;
