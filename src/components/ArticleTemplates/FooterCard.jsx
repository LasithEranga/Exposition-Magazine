import React from "react";
import { Col, Row } from "react-bootstrap";
import FooterAvatar from '../Avatar/FooterAvatar';
import NextArticles from "./NextArticles";

function FooterCard() {
  return (
    <div>
      <Col className="my-5 py-3" style={{borderColor:"#c3c9ce",border:"1px solid #c3c9ce", borderRight:"0", borderLeft:"0"}}>
          <FooterAvatar />
      </Col>
      <Col>
        <NextArticles />
      </Col>
    </div>
  );
}

export default FooterCard;
