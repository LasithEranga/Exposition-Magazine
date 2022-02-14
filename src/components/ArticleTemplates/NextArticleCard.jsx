import React from "react";
import { Col, Row } from "react-bootstrap";
import "./NextArticleCard.css";
import { GrNext } from 'react-icons/gr';

function NextArticleCard(){

    return (<div>
    <Row className="justify-content-center d-flex align-items-center next-article-arrow">
            <Col sm={7} className="text-end fw-bold" >sdkjfhjks sdkjfkdjskj sdkfhkjds</Col>
            <Col sm={3} className="bg-dark h-100">image</Col>
            <Col sm={2} className="bg-light h-100 justify-content-center d-flex align-items-center "><GrNext  size={20}/></Col>
          </Row>
        
    </div>);
}

export default NextArticleCard;