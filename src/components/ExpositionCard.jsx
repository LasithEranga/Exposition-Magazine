import _ from "lodash";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ExpositionCard.css";
import { Link } from "react-router-dom";

const ExpositionCard = ({ article }) => {
  return (
    <Col md={6} lg={12} className="expo-card-border">
      <Row className="mb-3 mb-lg-0 mx-1 mx-lg-0 ">
        <Col lg={6} className=" image-expo px-lg-0 px-0">
          <Link to={`/articles/${article.id}`}>
            {" "}
            <img
              loading="lazy"
              src={article.image}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Link>
        </Col>
        <Col lg={6} className=" pt-2 pt-lg-0 ps-0 ps-lg-2">
          <span style={{ fontWeight: "bold " }}>
            {" "}
            <Link to={`/articlefilter/${article.category}`}>
              <span
                style={{ fontSize: "0.7rem" }}
                className={`badge rounded-1 text-nowrap   ${
                  article.categoryColor ? article.categoryColor : ""
                }`}
              >
                {article.category.toUpperCase()}
              </span>
            </Link>
          </span>
          <Link to={`/articles/${article.id}`}>
            <span className="text-dark fw-bold d-block mt-1 exposition-title ">
              {_.truncate(article.title.toUpperCase(), { length: "50" })}
            </span>
          </Link>
        </Col>
        <hr className="my-3" />
      </Row>
    </Col>
  );
};

export default ExpositionCard;
