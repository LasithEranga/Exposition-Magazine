import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaShareAlt } from "react-icons/fa";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlinePrinter } from "react-icons/ai";

function Share() {
  return (
    <div style={{position:"fixed"}} className="d-none d-lg-block">
      <Col>
          <FaShareAlt size={50}  className="p-2 border border-3"/>
      </Col>
      <Col>
          <BsBookmarkStar size={50}  className="p-2 my-2 border border-3"/>
      </Col>
      <Col>
          <AiOutlinePrinter size={50}  className="p-2 border border-3"/>
      </Col>
      
    </div>
  );
}

export default Share;
