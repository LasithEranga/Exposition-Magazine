import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import "./FirstCarouselItem.css";

import ArticleList from "../Data/Articles.json";
import { Link } from "react-router-dom";

let expertInsight = ArticleList.filter(
  (article) => article.category === `expert's-insights`
);

function FirstCarousel() {
  return (
    <Card className="rounded-0">
      {expertInsight && expertInsight.length > 0 && (
        <Link to={`/articles/${expertInsight[0].id}`}>
          <Card.Body className="px-1 expert-card-hr">
            <div className="expert-insight-img">
              <img
                alt=""
                src={expertInsight[0].image}
                className="w-100 h-100 expert-insight-img"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="mb-5"></div>
            <Row>
              <div className="d-flex mt-1">
                <Col className=" col-12 pb-5 text-dark">
                  <h4>{expertInsight[0].title}</h4>
                  <span className="text-secondary">{expertInsight[0].description}</span>
                </Col>
              </div>
              <div></div>
            </Row>
          </Card.Body>
        </Link>
      )}
    </Card>
  );
}

export default FirstCarousel;
