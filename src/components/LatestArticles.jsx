import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import LatestArticlesSlider from "./LatestArticlesSlider";

const LatestArticles = () => {
  return (
    <Container className="px-0 overflow-hidden">
      <Row>
        <div className=" d-flex justify-content-start align-items-center  my-2 ms-1">
          <div className="d-flex text-nowrap justify-content-start align-items-center col-3 col-md-1 me-md-3 me-lg-0 col-lg-1 " style={{zIndex:"1000"}}>
            <div 
              style={{
                width: "fit-content",
                height: "2rem",
                backgroundColor: "#F2B900",
                paddingLeft: "0.3rem",
                paddingRight: "0.3rem",
                color: "white",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                fontSize:"0.7rem"
              }}
            >
              Latest Articles
            </div>
            <div
              style={{
                width: "0",
                height: "0",
                borderTop: "0.3rem solid transparent",
                borderColor: "transparent",
                borderLeft: "0.6rem solid #F2B900",
                borderBottom: "0.3rem solid transparent",
              }}
            ></div>
          </div>
          <div className="text-nowrap overflow-hidden" >
          <LatestArticlesSlider />
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default LatestArticles;
