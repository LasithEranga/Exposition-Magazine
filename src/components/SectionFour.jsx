import React from "react";
import SpiritCard from "./SpiritCard";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import "./SectionFour.css";
import ExpositionCard from "./ExpositionCard";
import ArticleData from "../Data/Articles.json";

//sets the section 4 view the spirit and events section
//creates two cards and use spirit card and small card components

const getPopularArticles = () => {
  return ArticleData.sort(() => 0.5 - Math.random()).slice(0, 4);
};

const filteredData = ArticleData.filter((article) => {
  return article.category === "miscellaneous";
});

const editorsNote = ArticleData.filter((article) => {
  return article.title === "Editor's Note";
})[0];

console.log(editorsNote)

function SectionFour() {
  return (
    <Container>
      <Row>
        <Col className="col-12 col-lg-9">
          <Row className="px-4 px-lg-0 me-lg-2">
            <Title>Spirits</Title>
            <Card className="px-3 pt-1 rounded-0">
              <Card.Body className="pb-2 px-md-0">
                <Row className="spirit ">
                  <SpiritCard />
                  <SpiritCard />
                  <SpiritCard />
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col className="col-12 col-lg-3 ">
          <Row className="px-4 px-lg-0">
            <Title>Exposition</Title>

            <Card className="pt-3 pt-md-0 ps-lg-1 rounded-0">
              <Row className="p-lg-3 pt-md-3 py-lg-3 d-flex expo-card-hr">
              {editorsNote? <ExpositionCard article={editorsNote} />:''}
                {filteredData.length > 0
                  ? filteredData.map((article,index) => {
                      return <ExpositionCard article={article} key={index}/>;
                    })
                  : ""}
              </Row>
            </Card>

            <Title>Popular</Title>
            <Card className="pt-3 pt-md-0 ps-lg-1  rounded-0">
              <Row className="p-lg-3 pt-md-3 py-lg-3 d-flex expo-card-hr">
                {getPopularArticles().map((article, index) => {
                  return <ExpositionCard key={index} article={article} />;
                })}
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionFour;
