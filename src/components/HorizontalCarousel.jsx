import React from "react";
import Container from "react-bootstrap/Container";
import CardView from "./CardView";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./dotStyle.css";
import Title from "./Title";

function HorizontalView() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <React.Fragment>
      <Container className="p-0">
        <Title>Interviews</Title>
      </Container>
      <Container className="justify-content-center bg-light pt-3 ps-4 pb-4 ">
        <Carousel
          arrows={false}
          dotListClass="dotw"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay={true}
          autoPlaySpeed={1000}
          infinite={true}
          showDots={true}
          responsive={responsive}
        >
          <div>
            <CardView />
          </div>
          <div>
            <CardView />
          </div>
          <div>
            <CardView />
          </div>
          <div>
            <CardView />
          </div>
          <div>
            <CardView />
          </div>
          <div>
            <CardView />
          </div>
          <div>
            <CardView />
          </div>
          <div>
            <CardView />
          </div>
        </Carousel>
      </Container>
    </React.Fragment>
  );

  // return (
  //   <Container className="justify-content-center bg-light">
  //     <Row className="px-2 pt-3">
  //       <Carousel>
  //         <Carousel.Item interval={1500}>
  //         <Row className="px-2 pt-3">
  //           <Col>
  //             <CardView />
  //           </Col>
  //           <Col>
  //             <CardView />
  //           </Col>
  //           <Col>
  //             <CardView />
  //           </Col>
  //           <Col>
  //             <CardView />
  //           </Col>
  //           </Row>
  //         </Carousel.Item>
  //         <Carousel.Item interval={1500}>
  //         <Row className="px-2 pt-3">
  //           <Col>
  //             <CardView />
  //           </Col>
  //           <Col>
  //             <CardView />
  //           </Col>
  //           <Col>
  //             <CardView />
  //           </Col>
  //           <Col>
  //             <CardView />
  //           </Col>
  //           </Row>
  //         </Carousel.Item>
  //       </Carousel>
  //     </Row>
  //   </Container>
  // );
}

export default HorizontalView;
