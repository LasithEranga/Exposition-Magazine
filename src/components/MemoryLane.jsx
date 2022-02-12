import { Container } from "react-bootstrap";
import stories from "../Data/MemoryLane.json";

import MemoryLaneCarousel from "./MemoryLaneCarousel";

const MemoryLane = () => {
  return (
    <Container fluid={"md"} className="m-0 p-0 m-lg-auto">

      <MemoryLaneCarousel stories={stories} />
    </Container>
  );
};

export default MemoryLane;
