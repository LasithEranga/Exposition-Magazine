
import stories from "../Data/MemoryLane.json";

import MemoryLaneCarousel from "./MemoryLaneCarousel";

const MemoryLane = () => {
  return (
    <div id="memory-lane">
      <MemoryLaneCarousel stories={stories} />
    </div>
  );
};

export default MemoryLane;
