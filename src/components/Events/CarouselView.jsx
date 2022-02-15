import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Competition.css";

function CarouselView() {
  return (
    <Card className="rounded-0 pb-3">
      <Card.Body className="px-1 expert-card-hr">
        <Carousel>
          <Carousel.Item>
            <div className="bg-dark  image-competition">
              <img
                src={"https://static.onecms.io/wp-content/uploads/sites/35/2021/11/23/Melissa-Roxburgh-ED-Journey-Manifest-Story-GettyImages-1341169064-1323663587-AdobeStock_320768018-2000.jpg"}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="mb-5"></div>
        <Row>
          <div className="d-flex mt-1">
            <Col className=" col-12 ms-lg-3 pb-5">
              <h4>iChair: A Smart Chair as a Companion </h4>
              <span>
                Dr. Janaka Wijekoon (Visiting Lecturer - Department of
                Industrial Management, University of Kelaniya
              </span>
            </Col>
          </div>
          <div></div>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CarouselView;
