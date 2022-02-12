import { Carousel } from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Title from "./Title";
import CarouselImageWithPopUp from './CarouselImageWithPopUp/CarouselImageWithPopUp'

const MemoryLaneCarousel =({stories}) =>{
  return (
    <Container>
      <Row className="px-4 px-lg-0">
        <Title>Memory Lane</Title>
        <Carousel controls={false} fade className="position-relative p-0" pause={false}>

        {stories?stories.map((story,index) => (
          <Carousel.Item key={index} interval={1000} >
            <CarouselImageWithPopUp image={story.image}/>
          </Carousel.Item>
        )):''}
      </Carousel>
      </Row>
    </Container>
  );
}

export default MemoryLaneCarousel;
