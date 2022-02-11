import React from "react";
import Carousel from "react-bootstrap/Carousel";
import expertimg from "../images/expertimg.png"

function FirstCarouselItem() {
  const imgStyle = { height: "300px", width: "100%" };
  return (
    <Carousel>
      <Carousel.Item>
        <div style={imgStyle} className="bg-dark">
        <img
                src={expertimg}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={imgStyle} className="bg-dark">
          image
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
