//card that will be used in students corner and other verticle views
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SmallCard.css";
import { Link } from "react-router-dom";

function SmallCard({ article }) {
  return article ? (
    
    <Row>
      <Col
        className={`px-0 col-12 col-md-6   ${
          article.categoryColor ? article.categoryColor : " "
        } image-height`}
      >
        <Link to={`/articles/${article.id}`}><img
          src={article.image ? article.image : ""}
          alt=""
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        /></Link>
      </Col>
      <Col className=" col-12 col-md-6 ps-0 ps-lg-2">
        {article.category && (
          <Row className="">
            <Link to={`/articlefilter/${article.category}`} className="">
              <span
                style={{fontSize:'0.6rem'}}
                className={`badge rounded-1 text-nowrap  ${
                  article.categoryColor ? article.categoryColor: ""
                }`}
              >
                {article.category.toUpperCase()}
              </span>
            </Link>
            </Row>
        )}
        <Link to={`/articles/${article.id}`}><span style={{}} className="text-dark fw-bold stu-corner-text">{article.title.toUpperCase()}</span></Link>
      </Col>
      <hr className="mt-3" />
    </Row>
  ) : (
    <div></div>
  );
}

export default SmallCard;
