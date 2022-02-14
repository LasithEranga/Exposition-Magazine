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
      <Col className=" col-12 col-md-6">
        {article.category && (
          <span style={{ fontWeight: "bold" }}>
            {" "}
            <Link to={`/articlefilter/${article.category}`} className="p-0">
              <span
              
                className={`badge rounded-1 text-wrap   ${
                  article.categoryColor ? article.categoryColor: ""
                }`}
              >
                {article.category}
              </span>
            </Link>
          </span>
        )}
        <br></br> <Link to={`/articles/${article.id}`}><span style={{fontSize:'0.8rem'}} className="text-dark fw-bold ">{article.title.toUpperCase()}</span></Link>
      </Col>
      <hr className="mt-3" />
    </Row>
  ) : (
    <div></div>
  );
}

export default SmallCard;
