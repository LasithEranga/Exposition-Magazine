import React from "react";
import { Container } from "react-bootstrap";
import { NavLink, Link,useLocation } from "react-router-dom";
import logo from "../images/logo main.png";
import OffCanvas from "./Buttons/OffCanvas";
import mit from '../images/mit logo black new.png'
import {motion} from 'framer-motion';
import '../components/Buttons/offcanvas.css';

const Header = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Container
        style={{ position: "relative" }}
        className="d-flex justify-content-start justify-content-lg-center align-items-center py-3 px-0"
      >
        <div className="canvas" style={{ position: "absolute"}}>
          <OffCanvas placement={"start"} name={"Click"} />
        </div>

        <div className="d-none d-lg-block" style={{ position: "absolute", right: 0 }}>
          <img src={mit} alt=""  style={{width:'10rem'}} />
        </div>

        <Link to={"/"}>
          {" "}
          <motion.img src={logo} alt="" className="logo-hight" whileHover={{scale:1.2}}/>
        </Link>
      </Container>
      <div
        className={` text-center border-end-0 border-start-0 border border-2 pt-3 pb-lg-3 px-3 ${
          location.pathname.slice(0, 10) === "/articles/" ? "sticky-top" : " "
        }`}
        style={{ backgroundColor: "#ebebeb" }}
      >
        <div
          className="text-center overflow-auto pb-3 pb-lg-0 "
          style={{ fontSize: "0.9rem", fontWeight: "600" }}
        >
          <NavLink end className=" text-dark px-2 " to="/" >
            HOME
          </NavLink>
          <NavLink end className="text-dark px-2" to="/articlefilter">
            ARTICLES
          </NavLink>
          <NavLink
            to="/articlefilter/events"
            className="text-dark px-2 text-nowrap "
          >
            IMSSA EVENTS
          </NavLink>
          <NavLink
            to="/articlefilter/news"
            className="text-dark px-2 text-nowrap "
          >
            NEWS
          </NavLink>
          <NavLink
            to="/articlefilter/interviews"
            className="text-dark px-2 text-nowrap "
          >
            INTERVIEWS
          </NavLink>

          <NavLink
            to="/articlefilter/expert's-insights"
            className="text-dark px-2 text-nowrap "
          >
            EXPERT'S INSIGHTS
          </NavLink>

          <NavLink className="text-dark px-2 text-nowrap " to="/about-us">
            ABOUT-US
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
