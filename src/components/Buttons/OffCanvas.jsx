import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi';

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span varient="primary" onClick={handleShow} className=" ms-lg-0 p-1 ms-3 border-0 text-dark" style={{backgroundColor:'transparent'}}>
        <GiHamburgerMenu size={30}/>
      </span>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
