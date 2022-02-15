import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "./NextArticleCard.css";
import { GrPrevious } from "react-icons/gr";
import ArticleDataContext from "../../context/ArticleDataContext";
import { Link } from "react-router-dom";

function PreviousArticleCard() {
  const article = useContext(ArticleDataContext).previousArticle;

  return (
    <div>
      {article && <Row className="justify-content-center d-flex align-items-center next-article-arrow">
        <Col className="col-1 ps-2 ms-2 bg-light h-100 justify-content-center d-flex align-items-center ">
          <Link to={`/articles/${article.id}`} className="p-0">
            <GrPrevious size={20} />
          </Link>
        </Col>
        <Col className="col-3 col-md-2 h-100">
          <Link to={`/articles/${article.id}`} className="p-0">
            <img
              src={article.image}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Link>
        </Col>
        <Col className="fw-bold">
          <span style={{ fontWeight: "400" }}>Previous Article</span> <br />
          {article.title}
        </Col>
      </Row>}
    </div>
  );
}

export default PreviousArticleCard;
