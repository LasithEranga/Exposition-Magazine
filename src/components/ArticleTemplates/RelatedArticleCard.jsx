import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function RelatedArticleCard(props){

    return(
        <Row className={`border-start-0 border-end-0  ${props.class? props.class : ' '}`}>
            <Col lg={8}>
                <Row>
                      <Link to={`/articlefilter/${props.category}`} className="p-0"><span className={`badge rounded-1 text-wrap   ${props.categoryColor?'':'bg-warning'}`} >{props.category?" ":'Student Corner'}</span></Link>
                </Row>
                <Row><span className="px-0 fw-bold">When Banned Books Unlock the Secrets of My Universe</span></Row>
                
            </Col>
            <Col className="bg-dark">Image</Col>
            <Row style={{color:'#8d9498'}} >author + read time When Banned </Row>
        </Row>
    )
}

export default RelatedArticleCard;