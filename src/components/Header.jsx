import React from "react";
import {  Container} from "react-bootstrap";
import { Link,useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import OffCanvas from "./Buttons/OffCanvas";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname.slice(0,10))
  return (
    <React.Fragment>
      <Container style={{position:'relative'}} className="d-flex justify-content-center align-items-center py-3">
      
      <div style={{position:'absolute',left:0}}>
      <OffCanvas placement={'start'} name={'Click'}/>
      </div>
      
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="" style={{ height: "4rem" }} />
        </Link>
       
      </Container>
        <div className={` text-center border-end-0 border-start-0 border border-2 pt-3 pb-lg-3 px-3 ${location.pathname.slice(0,10) === '/articles/' ? 'sticky-top' : ' ' }`} style={{backgroundColor:"#ebebeb"}}>
        <div className="text-center overflow-auto pb-3 pb-lg-0 " style={{fontSize:"0.9rem", fontWeight:'600'}} >
          <Link className=" text-dark px-2 " to="/">
            HOME
          </Link> 
          <Link className="text-dark px-2" to="/articlefilter">
            ARTICLES
          </Link>
          <Link to="/articlefilter/IMSSA-events" className="text-dark px-2 text-nowrap ">
            IMSSA EVENTS
          </Link>
          <Link to="/articlefilter/news" className="text-dark px-2 text-nowrap ">
            NEWS
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
