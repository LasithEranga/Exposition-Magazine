import React from "react";
import FirstCarouselItem from "./FirstCarouselItem";
import Card from "react-bootstrap/Card";
import ExpertInsightCard from "./ExpertInsightCard";


function FirstCarousel() {
  return (
    <Card className="rounded-0">
      <Card.Body className="px-1 expert-card-hr">
        <FirstCarouselItem />
        <div className="mb-5"></div>
        <ExpertInsightCard />
        <ExpertInsightCard />
        <ExpertInsightCard />
      </Card.Body>
    </Card>
  );
}


export default FirstCarousel;