import React from "react";
import img from "../images/logo.png";
import dimLogo from "../images/mit-logo.png";

const Footer = () => {
  return (
    <React.Fragment>
        <div
      className="w-100 bg-dark mt-3 d-flex flex-column flex-md-row p-4 p-md-5 "
      style={{ height: "fit-content" }}
    >
      <div className="w-100 w-md-50 h-100 justify-content-center  align-items-center d-flex flex-column">
        <img src={img} alt="" style={{ width: "22rem" }} className="mb-2" />
        <p
          className="text-light fw-light text-wrap"
          style={{ width: "22rem", textAlign: "justify" }}
        >
          Exposition Magazine, most outstanding magazine of the year to bridge
          the gap between Management and IT platforms which is one of the
          leading university business magazines to mark the footprints of
          undergraduates to the Cooperate World.
        </p>
        <img
          src={dimLogo}
          alt=""
          style={{ width: "22rem" }}
          className="mb-2 mt-3"
        />
      </div>
      <div className="w-100 w-md-50 h-100 d-flex justify-content-center flex-column ">
        <div className="p-2 pt-5 pt-md-0 p-md-5">
          <div className="fs-4 text-start" style={{ color: "#C49706" }}>
            Contact Us
          </div>
          <div className=" d-flex flex-column text-light fw-light ">
            <span>Department of Industrial Management,</span>
            <span>Faculty of Science,</span>
            <span>University of Kelaniya,</span>
            <span>Dalugama,</span>
            <span>Kelaniya,</span>
            <span>Sri Lanka</span>
            <br />
            <span>Phone: +94 (0) 112 903 282</span>
            <span>Email: info@exposition.lk</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-100 text-light fw-light d-flex align-items-center justify-content-center" style={{height:'4rem',backgroundColor:'#151515'}}>
    All Rights Reserved © {new Date().getFullYear()} | Exposition 
    </div>
    </React.Fragment>
  );
};

export default Footer;
