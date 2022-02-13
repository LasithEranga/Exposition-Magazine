import React from "react";
import Carousel from "react-bootstrap/Carousel";
import expertimg from "../images/expertimg.png";
import "./FirstCarouselItem.css";

function FirstCarouselItem() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="expert-insight-img">
          <img
            alt=""
            src={expertimg}
            className="w-100 h-100 expert-insight-img"
            style={{ objectFit: "cover" }}
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCarouselItem;
