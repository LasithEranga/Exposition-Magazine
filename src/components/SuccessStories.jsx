import { Container } from "react-bootstrap";
import Title from './Title';
import stories from "../Data/SuccessStories.json";

import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

const SuccessStories = () => {
  return <Container fluid={'md'} className="m-0 p-0 m-lg-auto">
      <div className="px-3 px-md-0"><Title >Success Stories</Title></div>
      
      <SuccessStoriesCarousel stories={stories} />
  </Container>;
};

export default SuccessStories;
