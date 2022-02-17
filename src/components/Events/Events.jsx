import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Title";
import EventCard from "./EventCard";
import CarouselView from "./CarouselView";
import ArticleData from '../../Data/Articles.json';

const events = ArticleData.filter(article=>article.category === `events`);
const edifyEvent = ArticleData.filter(article=>article.category === `Edify Winner`);
function Events() {
  return (
    <Container className="px-md-0">
      <Title>Events</Title>
      <Row className="mx-0">
        <Col className="col">
          <Row>
            <CarouselView article={edifyEvent[0]}/>
          </Row>
        </Col>

        <Col className="col-12 col-md-6 ms-md-3">
          <Row className="mb-3 ">
          {events.map((event,index)=>(
            event.title !== 'Edify | 2022' && 
              <EventCard
              key={index}
              title={event.title}
              class=" mt-md-0 pe-md-2 p-1"
              description={event.description}
              image={event.image}
              id={event.id}
              quote = {event.quote}
            />
            ))}
          </Row>
        </Col>
        {/* <Card className="rounded-0 mt-3">
          <Card.Body>
            <Row className="mx-0">
              <Col className="col-12 col-md-6">
                <TSFItem />
              </Col>
              <Col className="col-12 col-md-6">
                <TSFItem />
              </Col>
            </Row>
          </Card.Body>
        </Card> */}
      </Row>
    </Container>
  );
}

export default Events;
