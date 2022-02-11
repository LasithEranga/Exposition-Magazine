import { Carousel } from "react-bootstrap";

const LatestArticlesSlider = () => {
  return (
    <Carousel className="ms-3" controls={false} indicators={false}>
      <Carousel.Item interval={2000} >
       Lorem one 
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      Lorem two 
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      Lorem three
      </Carousel.Item>
    </Carousel>
  );
};

export default LatestArticlesSlider;
