import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Competition.css";
import { Link } from "react-router-dom";

function CarouselView({ article }) {
  return (
    <Card className="rounded-0">
      <Card.Body className="px-1 expert-card-hr">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={2000}>
            <div className=" image-competition">
              <img
                loading="lazy"
                src={"https://magazine.exposition.lk/images/edify.png"}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <div className=" image-competition">
              <img
                loading="lazy"
                src={"https://magazine.exposition.lk/images/edify_winners.jpg"}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </Carousel.Item>
        </Carousel>

        <Row>
          <div className="d-flex mt-2 pt-1">
            <Col className=" col-12 ms-lg-3 pb-1 pb-lg-3 pb-xxl-4">
            <Link to={`/articlefilter/${article.category}`}>
              <span
                className={`badge rounded-1 text-nowrap  mb-2 ${
                  article.categoryColor ? article.categoryColor : ""
                }`}
              >
                {article.category.toUpperCase()}
              </span>
            </Link>
              <Link to={`/articles/${article ? article.id : ""}`}>
                <h4 className="text-dark">{article ? article.title : ""} </h4>
                <span className="text-dark">
                  {article ? article.description : ""}
                </span>
              </Link>
            </Col>
          </div>
          <div></div>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CarouselView;
