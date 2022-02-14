import React from "react";
import { Col, Row } from "react-bootstrap";
import "./NextArticleCard.css";
import { GrPrevious } from 'react-icons/gr';

function PreviousArticleCard(){

    return (<div>
        <Row className="justify-content-center d-flex align-items-center next-article-arrow">
            <Col  className="col-1 ps-2 ms-2 bg-light h-100 justify-content-center d-flex align-items-center "><GrPrevious  size={20}/></Col>
            <Col  className="col-3 col-md-2 bg-dark h-100">image</Col>
            <Col  className="fw-bold"><span style={{fontWeight:"400"}}>Previous Article</span> <br/>sdkjfhjks sdkjfkdjskj sdkfhkjds</Col>
          </Row>
    </div>);
}

export default PreviousArticleCard;