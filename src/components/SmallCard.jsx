//card that will be used in students corner and other verticle views
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./SmallCard.css";


function SmallCard(props) {
  return (
   
        <Row>
          <Col className={`px-0 col-12 col-md-6   ${props.class ? props.class : ' '} image-height`}>
            <img src="https://financerewind.com/wp-content/uploads/2021/07/Melissa-Roxburgh-1-1200x1441.jpeg" alt="" 
             className="w-100 h-100"
                style={{ objectFit: "cover" }}
            />
          </Col>
          <Col className=" col-12 col-md-6">
            <span style={{ fontWeight: "bold" }}>Hello Title</span>
            <br></br>{" "}
            <span>
              lorem4kjnl
              <br />
              sdjfojsdi
            </span>
          </Col>
          <hr className="mt-3" />
        </Row>
      
  );
}

export default SmallCard;
