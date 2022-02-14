import React from "react";
import { Col, Row } from "react-bootstrap";
import "./NextArticleCard.css";
import { GrPrevious } from 'react-icons/gr';

function NextArticleCard(){

    return (<div>
        <Row className="justify-content-center d-flex align-items-center next-article-arrow">
            <Col sm={2} className="bg-light h-100 justify-content-center d-flex align-items-center "><GrPrevious  size={20}/></Col>
            <Col sm={3} className="bg-dark h-100">image</Col>
            <Col sm={7} className="fw-bold">sdkjfhjks sdkjfkdjskj sdkfhkjds</Col>
          </Row>
    </div>);
}

export default NextArticleCard;