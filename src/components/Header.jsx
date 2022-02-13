import React from "react";
import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <React.Fragment>
      <Container className="d-flex justify-content-center align-items-center py-3">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="" style={{ height: "4rem" }} />
        </Link>
      </Container>
        <div className=" d-flex justify-content-center align-items-center border-end-0 border-start-0 border border-2 py-3">
        <div className=" d-flex justify-content-center align-items-center overflow-auto" >
          <Link className=" text-dark px-2 " to="/">
            HOME
          </Link>
          <Link className="text-dark px-2" to="/articlefilter">
            ARTICLES
          </Link>
          <Link to="/articlefilter/IMSSA-events" className="text-dark px-2 text-nowrap ">
            IMSSA EVENTS
          </Link>
          <Link to="/articlefilter/im-news" className="text-dark px-2 text-nowrap ">
            IM NEWS
          </Link>
          <Link
            to="/articlefilter/interviews"
            className="text-dark px-2 text-nowrap "
          >
            INTERVIEWS
          </Link>

          {/* <Link
            to="/articlefilter/student's-corner"
            className="text-dark px-2"
          >
            STUDENT'S CORNER
          </Link> */}

          <Link
            to="/articlefilter/expert's-insights"
            className="text-dark px-2 text-nowrap "
          >
            EXPERT'S INSIGHTS
          </Link>

          {/* <Link
            to="/articlefilter/reaserch-and-development"
            className="text-dark px-2"
          >
            REARCH AND DEVELOPMENT
          </Link> */}

          <Link className="text-dark px-2 text-nowrap " to="/about-us">
            ABOUT-US
          </Link>
      </div>
        </div>
    </React.Fragment>
  );
};

export default Header;
