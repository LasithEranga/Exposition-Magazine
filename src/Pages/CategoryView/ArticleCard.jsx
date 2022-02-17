import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AllArticles.css";
import truncate from "lodash/truncate";
import { motion } from "framer-motion";

function ArticleCard(props) {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card as={motion.div}  whileHover={{scale:1.05}} style={{ width: "100%" }} className="my-2">
        <Link to={`/articles/${props.id}`} className="">
          <Card.Img
          loading="lazy"
            className="p-3 pb-0"
            style={{ height: "13rem", objectFit: "cover" }}
            variant="top"
            src={props.image}
          />
        </Link>
        <Card.Body>
          <div className="d-flex felx-column justify-content-between ">
            <Link to={`/articles/${props.id}`} className="">
              <Card.Title className="fw-bold text-dark">
                {props.title}{" "}
              </Card.Title>
            </Link>
            <Link to={`/articlefilter/${props.category}`}>
              <span
                style={{ fontSize: "0.7rem" }}
                className={`badge text-wrap d-flex align-items-center ${props.categoryColor}`}
              >
                {props.category.toUpperCase()}
              </span>
            </Link>
          </div>
          <Card.Text className="text-muted" style={{ textAlign: "justify" }}>
            <Link to={`/articles/${props.id}`} className="text-dark">
              {" "}
              {truncate(props.description, { length: 200 })}
            </Link>
          </Card.Text>
          <Link to={`/articles/${props.id}`} className="">
            Read more...
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ArticleCard;
