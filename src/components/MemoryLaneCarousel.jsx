import { Carousel } from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Title from "./Title";

const MemoryLaneCarousel =({stories}) =>{
  return (
    <Container className="p-md-0">
      <Row className="px-4 px-lg-0">
        <Title>Memory Lane</Title>
        <Carousel controls={false} fade className="position-relative p-0" pause={false}>

        {stories?stories.map((story,index) => (
          <Carousel.Item key={index} interval={1000} >
            <div className=" bg-dark w-100 " style={{ height: "40rem" }}>
              
              <img
                src={story.image?story.image:''}
                alt={story.alt?story.alt:''}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              className="position-absolute d-flex justify-content-center align-items-center flex-column flex-md-row"
              style={{
                width: "100%",
                height: "100%",
                margin: "auto",
                top: "0",
                left: "0",
                backdropFilter: "saturate(180%) blur(10px)",
                gap: "1rem",
              }}
            >
             <img src={story.image?story.image:''} alt="" style={{width:'75%',height:'75%', objectFit: "cover" }} />
            </div>
          </Carousel.Item>
        )):''}
      </Carousel>
      </Row>
    </Container>
  );
}

export default MemoryLaneCarousel;
