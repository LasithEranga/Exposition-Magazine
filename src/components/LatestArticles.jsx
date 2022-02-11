import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import LatestArticlesSlider from "./LatestArticlesSlider";

const LatestArticles = () => {
  return (
    <Container className="px-0">
    <Row>
      <div className="d-none d-lg-flex justify-content-start align-items-center  mt-2">
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
        <LatestArticlesSlider />
      </div>
      </Row>
    </Container>
  );
};

export default LatestArticles;
