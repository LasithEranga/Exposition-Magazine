import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./FirstCarouselItem.css";

function FirstCarouselItem() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <div className="expert-insight-img">
          <img
            alt=""
            src={"https://static.onecms.io/wp-content/uploads/sites/35/2021/11/23/Melissa-Roxburgh-ED-Journey-Manifest-Story-GettyImages-1341169064-1323663587-AdobeStock_320768018-2000.jpg"}
            className="w-100 h-100 expert-insight-img"
            style={{ objectFit: "cover" }}
          />
        </div>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCarouselItem;
