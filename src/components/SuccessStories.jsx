
import React from "react";
import Title from "./Title";
import stories from "../Data/SuccessStories.json";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

const SuccessStories = () => {
  return (
    <React.Fragment>
      <Title>365x4</Title>
      <SuccessStoriesCarousel stories={stories} />
    </React.Fragment>
  );
};

export default SuccessStories;
