import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StudentsCorner from "./StudentsCorner";
import FirstCarousel from "./FirstCarousel";
import Title from "./Title";
import News from "./News";
import TSFItem from "./TSFItem";
import ArticleList from "../Data/Articles.json";
import SuccessStories from './SuccessStories';

const getTSF = () => {
  return ArticleList.filter((article) => {
    return article.category === "365x4";
  });
};



function BelowLanding() {
  return (
    <Container>
      <Row >
        <Col className="col-12 col-md-5 col-lg-3  ">
          <Row className="px-3 px-md-0">
            <Title>Students' Corner </Title>

            <StudentsCorner />
          </Row>
        </Col>
        <Col className="col-12 col-md-7 col-lg-9">
          <Row>
            <Col className="col ms-md-3 ms-lg-4">
              <Row className="px-3 px-md-0" >
                <Title >Experts Insights</Title>

                <FirstCarousel />
              </Row>
            </Col>

            <Col className="col-12 col-md-12 col-lg-4  ps-md-4  ms-lg-3 ">
              <Row className="px-3 px-md-1">
                <Title>News</Title>
                <News />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="col d-none  d-lg-flex ms-md-3 ms-lg-4 px-lg-0">
              <Row className="px-3 px-lg-0 px-md-0  col-lg-12 mx-lg-0">
                <Title>365 x 4 </Title>
                <Card className="rounded-0 ps-3">
                  <Card.Body>
                    <Row>
                      {getTSF().map((article, index) => {
                        return <Col sm={12} lg={6} key={index} ><TSFItem article={article}/></Col>;
                      })}
                    </Row>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
        <Row className="px-3 px-md-0 mx-0 d-flex d-md-flex d-lg-none">
          {/* <Col className="col d-flex d-md-flex d-lg-none "> */}
            {/* <Row className=" px-md-0"> */}
              {/* <Title>365 x 4 </Title>
              <Card className="rounded-0 ps-3 ">
                <Card.Body>

                  <Row>
                  {getTSF().map((article, index) => {
                        return <Col key={index}  className="col-12 col-md-6"><TSFItem article={article}/></Col>;
                      })}

                  </Row>

                </Card.Body>
              </Card> */}
              <SuccessStories/>
            </Row>
          {/* </Col> */}
        {/* </Row> */}
      </Row>
    </Container>
  );
}

export default BelowLanding;
