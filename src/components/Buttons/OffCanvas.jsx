import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const LinkHandler = () => {
    setShow(false);
  };

  return (
    <>
      <span
        varient="primary"
        onClick={handleShow}
        className=" ms-lg-0 p-1 ms-3 border-0 text-dark"
        style={{ backgroundColor: "transparent" }}
      >
        <GiHamburgerMenu size={30} />
      </span>
      <Offcanvas show={show} onHide={handleClose} {...props} className="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="" style={{ height: "4rem" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column gap-4 fs-6 fw-bold justify-content-center ">
            <Link className=" text-dark px-2 " to="/" onClick={LinkHandler}>
              HOME
            </Link>
            <Link
              className="text-dark px-2"
              to="/articlefilter"
              onClick={LinkHandler}
            >
              ARTICLES
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/events"
              className="text-dark px-2 text-nowrap "
            >
              IMSSA EVENTS
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/365x4"
              className="text-dark px-2 text-nowrap "
            >
              365x4
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/student's-corner"
              className="text-dark px-2"
            >
              STUDENT'S CORNER
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/news"
              className="text-dark px-2 text-nowrap "
            >
              NEWS
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/interviews"
              className="text-dark px-2 text-nowrap "
            >
              INTERVIEWS
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/spirits"
              className="text-dark px-2 text-nowrap "
            >
              SPIRITS
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/expert's insights"
              className="text-dark px-2 text-nowrap "
            >
              EXPERT'S INSIGHTS
            </Link>
            <Link
              onClick={LinkHandler}
              to="/articlefilter/miscellaneous"
              className="text-dark px-2 text-nowrap "
            >
              MISCELLANEOUS
            </Link>
            <Link
              onClick={LinkHandler}
              className="text-dark px-2 text-nowrap"
              to="/about-us"
            >
              ABOUT-US
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
