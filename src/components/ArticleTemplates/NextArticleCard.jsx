import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "./NextArticleCard.css";
import { GrNext } from "react-icons/gr";
import ArticleDataContext from "../../context/ArticleDataContext";
import { Link } from "react-router-dom";

function NextArticleCard() {
  const article = useContext(ArticleDataContext).nextArticle;

  return (
    <div>
      {article && (
        <Row className="justify-content-center d-flex align-items-center next-article-arrow mt-4 ">
          <Col className="text-end fw-bold">
            <span style={{ fontWeight: "400" }}>Next Article</span> <br />
            {article.title}
          </Col>
          <Col className="col-3 col-md-2  h-100">
            <Link to={`/articles/${article.id}`} className="p-0">
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
          <Col className="col-1 bg-light h-100 justify-content-center d-flex align-items-center  pe-2 me-2">
            <Link to={`/articles/${article.id}`} className="p-0">
              <GrNext size={20} />
            </Link>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default NextArticleCard;
