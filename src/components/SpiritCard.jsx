import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SpiritCard.css";
import { Link } from "react-router-dom";

function SpiritCard({ article }) {
  return (
    <Col md={6} lg={12} className="px-0">
      <Row className="mb-3 mx-md-0 ">
        
        <Col lg={6} className="image-spirit pb-3 pb-lg-0">
          
          <Link to={`/articles/${article.id}`}>
            <img
              src={article.image}
              alt=""
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </Link>
          
        </Col>
        <Col lg={6} className="">
        <div className="mb-2">
            {article.category && (
              <span className="" style={{ fontWeight: "bold" }}>
                {" "}
                <Link to={`/articlefilter/${article.category}`} className="p-0">
                  <span
                    className={`badge rounded-1 text-wrap   ${
                      article.categoryColor ? article.categoryColor : ""
                    }`}
                  >
                    {article.category.toUpperCase()}
                  </span>
                </Link>
              </span>
            )}
          </div>
        <Link to={`/articles/${article.id}`}><span className="fw-bold fs-4 text-dark">{article.title}</span></Link>
          <br></br>
          <p className="mt-3">{article.description}</p>
          
        </Col>

        <hr className="mt-4 " />
      </Row>
    </Col>
  );
}

export default SpiritCard;
