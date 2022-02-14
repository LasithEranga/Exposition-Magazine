import React from "react";
import { Col, Row } from "react-bootstrap";
import "./NextArticleCard.css";
import { GrNext } from 'react-icons/gr';

function NextArticleCard(){

    return (<div>
        <Row className="justify-content-center d-flex align-items-center next-article-arrow mt-4 ">
            <Col  className="text-end fw-bold" ><span style={{fontWeight:"400"}}>Next Article</span> <br/>sdkjfhjks sdkjfkdjskj sdkfhkjds</Col>
            <Col  className="col-3 col-md-2 bg-dark h-100">image</Col>
            <Col  className="col-1 bg-light h-100 justify-content-center d-flex align-items-center  pe-2 me-2"><GrNext  size={20}/></Col>
        </Row>
        
    </div>);
}

export default NextArticleCard;