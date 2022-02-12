// import React from "react";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Title from "./Title";

// function Events() {
//   return (
//     <Container className="p-md-0">
//       <Row className="px-4 px-lg-0">
//         <Title>Events</Title>
//         <Card className="rounded-0">
//           <Card.Body className="px-1 rounded-0">
//           </Card.Body>
//         </Card>
//       </Row>
//     </Container>
//   );
// }

// export default Events;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "./CarouselView";
import Title from "../Title";
import TSFItem from "../TSFItem";
import EventCard from "./EventCard";
import CarouselView from "./CarouselView";

function Events() {
  return (
    <Container className="px-0">
      <Title>Events</Title>
      <Row className="mx-0">
        <Col className="col">
          <Row>
            <CarouselView />
          </Row>
        </Col>

        <Col className="col-12 col-md-4 ms-3">
          <Row className="mb-3">
            <Card className="border-0  ps-2 pt-0 border-0 rounded-0">
              <Card.Body>
                <EventCard />
              </Card.Body>
            </Card>
          </Row>
          <Row className="">
            <Card className="border-0  pt-0 border-0 rounded-0">
              <Card.Body>
                <EventCard />
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Card className="rounded-0 mt-3">
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
        </Card>
      </Row>
    </Container>
  );
}

export default Events;
