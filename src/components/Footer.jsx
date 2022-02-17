import React from "react";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import img from "../images/logo.png";
import dimLogo from "../images/mit-logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div
        className="w-100 bg-dark mt-3 d-flex flex-column flex-md-row p-4 p-md-5 "
        style={{ height: "fit-content", position: "relative", zIndex: "900" }}
      >
        <div className="w-100 w-md-50 h-100 justify-content-center  ps-md-5 d-flex flex-column">
          <img
            loading="lazy"
            src={img}
            alt=""
            className="mb-2 col-12 col-md-6"
          />
          <p
            className="text-light fw-light text-wrap mb-2 col-12 col-md-9 col-lg-7"
            style={{ textAlign: "justify" }}
          >
            Exposition Magazine, most outstanding magazine of the year to bridge
            the gap between Management and IT platforms which is one of the
            leading university business magazines to mark the footprints of
            undergraduates to the Cooperate World.
          </p>
          <img
            loading="lazy"
            src={dimLogo}
            alt=""
            className="mb-2 mt-3 mb-2 col-12 col-md-6"
          />
        </div>
        <div className="w-100 w-md-50 h-100 d-flex justify-content-center flex-column ">
          <div className="pt-5 pt-md-0 p-md-5">
            <div className="fs-4 text-start" style={{ color: "#daa520" }}>
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
              <span>Phone: +94 112 903 282</span>
              <span>Email: info@exposition.lk</span>
              <div
                className="pt-2 d-flex  align-items-center"
                style={{ gap: "0.5rem" }}
              >
                <a href="https://m.facebook.com/Exposition.MIT">
                  <GrFacebook size={30} />
                </a>
                <a href="https://www.linkedin.com/company/theexposition/">
                  <GrLinkedin style={{ color: "#0A66C2" }} size={30} />
                </a>
                <a href="https://www.instagram.com/exposition_lk/?hl=en">
                  <GrInstagram
                    size={38}
                    style={{
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                      color: "#212529",
                      borderRadius: "50rem",
                      border: 0,
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-100  fw-light d-flex align-items-center justify-content-center"
        style={{ height: "4rem", backgroundColor: "#151515", color: "#99A1B9" }}
      >
        All Rights Reserved © {new Date().getFullYear()} | Exposition
      </div>
    </React.Fragment>
  );
};

export default Footer;
