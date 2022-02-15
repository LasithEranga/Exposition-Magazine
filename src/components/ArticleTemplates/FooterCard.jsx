import React from "react";
import { Col } from "react-bootstrap";
import FooterAvatar from "../Avatar/FooterAvatar";
import NextArticles from "./NextArticles";
import { useContext } from "react";
import ArticleDataContext from "../../context/ArticleDataContext";

function FooterCard() {
  const { alt, author, authorImage, authorPosition } =
    useContext(ArticleDataContext);

  return (
    <div>
      <Col
        className="my-5 py-3"
        style={{
          borderColor: "#c3c9ce",
          border: "1px solid #c3c9ce",
          borderRight: "0",
          borderLeft: "0",
        }}
      >
        <FooterAvatar />
      </Col>
      <Col>
        <NextArticles />
      </Col>
    </div>
  );
}

export default FooterCard;
