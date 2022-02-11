import { Container } from "react-bootstrap";
import Title from './Title';
import stories from "../Data/SuccessStories.json";

import MemoryLaneCarousel from "./MemoryLaneCarousel";

const MemoryLane = () => {
  return <Container fluid={'md'} className="m-0 p-0 m-lg-auto">
      <div className="px-3 px-md-0"><Title >Success Stories</Title></div>
      
      <MemoryLaneCarousel stories={stories} />
  </Container>;
};

export default MemoryLane;