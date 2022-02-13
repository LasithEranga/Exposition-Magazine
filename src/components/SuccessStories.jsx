import { Container, Row } from "react-bootstrap";
import React from "react";
import Title from "./Title";
import stories from "../Data/SuccessStories.json";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

const SuccessStories = () => {
  return (
    <React.Fragment>
      <Container >
        <Row className="px-3 px-lg-0">
        <Title>Success Stories</Title>
          <SuccessStoriesCarousel stories={stories} />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SuccessStories;
