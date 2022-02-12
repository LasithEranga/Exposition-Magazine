import { Container } from "react-bootstrap";
import stories from "../Data/MemoryLane.json";

import MemoryLaneCarousel from "./MemoryLaneCarousel";

const MemoryLane = () => {
  return (
    <Container>

      <MemoryLaneCarousel stories={stories} />
    </Container>
  );
};

export default MemoryLane;
