
import stories from "../Data/MemoryLane.json";

import MemoryLaneCarousel from "./MemoryLaneCarousel";

const MemoryLane = () => {
  return (
    <MemoryLaneCarousel stories={stories} />
  );
};

export default MemoryLane;
