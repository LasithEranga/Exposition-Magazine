import React from "react";
import Col from "react-bootstrap/Col";
import "./SponsorCard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function SponsorCard(props) {
  return (
    <Col
      md={6}
      lg={4}
      className={`mt-3 px-5 ${props.class ? props.class : " "}`}
    >
      <div className="rounded-0" as={motion.div} whileHover={{ scale: 1.03 }}>
          <Link to={`/articles/${props.id}`}>
            <Col className=" image-sponsor">
              <img
                loading="lazy"
                className={props.wh ? props.wh : " "}
                src={props.image}
                alt=""
                
              />
            </Col>
            <Col className=" ps-0 mt-1 text-dark">
              <p style={{ fontWeight: "bold" }} className='text-center'>
                {props.title ? props.title : " "}
              </p>
              <br />
            </Col>
          </Link>
      </div>
    </Col>
  );
}

export default SponsorCard;
