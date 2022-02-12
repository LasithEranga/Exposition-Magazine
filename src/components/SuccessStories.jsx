import { Container, Row } from "react-bootstrap";
import React from "react";
import Title from "./Title";
import stories from "../Data/SuccessStories.json";

import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

const SuccessStories = () => {
  return (
    <React.Fragment>
      <Container className="mx-1 mx-md-auto px-md-0">
        <div >
          <Title>Success Stories</Title>
        </div>
      </Container>
      <Container>
        <Row className="px-3 px-lg-0">
          <SuccessStoriesCarousel stories={stories} />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SuccessStories;
