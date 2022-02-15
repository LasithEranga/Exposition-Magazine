import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function RelatedArticleCard(props) {
  return (
    <Row
      className={`border-start-0 border-end-0  ${
        props.class ? props.class : " "
      }`}
    >
      <Col lg={8}>
        <Row>
          <Link to={`/articlefilter/${props.article.category}`} className="p-0">
            <span
              className={`badge rounded-1 text-nowrap   ${
                props.article.categoryColor ? props.article.categoryColor : ""
              }`}
            >
              {props.article.category ? props.article.category.toUpperCase() : ""}
            </span>
          </Link>
        </Row>
        <Row>
          <Link to={`/articles/${props.article.id}`} className="p-0">
            <span className="px-0 fw-bold text-black">{props.article.title}</span>
          </Link>
        </Row>
      </Col>
      <Col className="">
        {" "}
        <Link to={`/articles/${props.article.id}`} className="p-0">
          <img
            src={props.article.image}
            className="w-100 h-100"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </Link>
      </Col>
      <Row style={{ color: "#8d9498" }}>
        {props.article.author} + {props.article.readTime}{" "}
      </Row>
    </Row>
  );
}

export default RelatedArticleCard;
