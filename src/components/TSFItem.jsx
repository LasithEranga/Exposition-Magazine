// TSFItem means 365
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TSFItem.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TSFItem({ article }) {
  return (
    <Row className="py-1 py-md-2" as={motion.div} whileHover={{scale:1.02}}>
      <Col className="px-0 col-12 col-md-5 image-tsf">
        <Link to={`/articles/${article.id}`}>
          <img
            loading="lazy"
            src={article.image}
            alt=""
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </Col>
      <Col className="px-0 ps-md-3 col-12 col-md-7 mb-3">
        <Link to={`/articlefilter/${article.category}`}>
          <span
            style={{ fontSize: "0.7rem" }}
            className={`badge text-wrap  ${article.categoryColor}`}
          >
            {article.category.toUpperCase()}
          </span>
        </Link>
        <br></br>{" "}
        <Link to={`/articles/${article.id}`}>
          <span className="text-dark fs-4" style={{ fontWeight: "bold" }}>
            {" "}
            {article.title}{" "}
          </span>
        </Link>
        <br></br> {article.quote}
      </Col>
    </Row>
  );
}

export default TSFItem;
