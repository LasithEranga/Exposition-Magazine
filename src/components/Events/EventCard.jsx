//card that will be used in students corner and other verticle views
import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./EventCard.css";
import { Link } from "react-router-dom";

function EventCard(props) {
  return (
    <Col
      md={6}
      lg={6}
      className={`mt-3 px-0  ${props.class ? props.class : " "}`}
    >
      <Card className="rounded-0">
        <Card.Body>
          <Link to={`/articles/${props.id}`}>
            <Col className=" image-event">
              <img
                loading="lazy"
                className="w-100 h-100"
                src={props.image}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </Col>
            <Col className=" ps-0 mt-1 text-dark">
              <span style={{ fontWeight: "bold" }}>
                {props.title ? props.title : " "}
              </span>
              <br></br>{" "}
              <span>{props.quote ? props.quote : " "}</span>
              <br />
            </Col>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default EventCard;
