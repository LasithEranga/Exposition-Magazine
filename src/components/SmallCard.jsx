import truncate from "lodash/truncate";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SmallCard.css";
import { Link } from "react-router-dom";

function SmallCard({ article }) {
  return article ? (
    <Row>
      <Col className={`px-0 col-12 col-md-6  image-height`}>
        <Link to={`/articles/${article.id}`}>
          <img
            loading="lazy"
            src={article.image ? article.image : ""}
            alt=""
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </Col>
      <Col className=" col-12 col-md-6 ps-0 ps-md-2 pe-lg-0">
        {article.category && (
          <Row className="">
            <Link to={`/articlefilter/${article.category}`} className="">
              <span
                className={`badge rounded-1 text-nowrap mt-3 mt-lg-0 ${
                  article.categoryColor ? article.categoryColor : ""
                }`}
              >
                {article.category.toUpperCase()}
              </span>
            </Link>
          </Row>
        )}
        <Link to={`/articles/${article.id}`}>
          <span className="text-dark  fw-bold stu-corner-text ">
            {truncate(article.quote.toUpperCase(), { length: "40" })}
          </span>
        </Link>
      </Col>
      <hr className="mt-3" />
    </Row>
  ) : (
    <div></div>
  );
}

export default SmallCard;
