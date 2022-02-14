import React, { useState } from "react";
import { Alert, Col } from "react-bootstrap";
import { FaShareAlt } from "react-icons/fa";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlinePrinter } from "react-icons/ai";
const Share = () => {

 const [isAlertOpen,setIsAlertOpen] = useState(false);

  const printClickHandler = () => {
    window.scrollTo(0,0)
    window.print();
  };


  const shareClickhandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsAlertOpen(true);
  };

  const closeAlert = ()=>{
    setIsAlertOpen(false);
  }

  return (
    <div style={{ position: "fixed" }} className="d-none d-lg-block">
      {isAlertOpen && <Alert variant="secondary" dismissible={true} onClose={closeAlert}>
        Link Copied To Clipboard !
      </Alert>}
      <Col>
        <FaShareAlt
          onClick={shareClickhandler}
          size={50}
          className="p-2 border border-3"
        />
      </Col>
      <Col>
        <BsBookmarkStar  size={50} className="p-2 my-2 border border-3" />
      </Col>
      <Col>
        <AiOutlinePrinter
          onClick={printClickHandler}
          size={50}
          className="p-2 border border-3"
        />
      </Col>
      
    </div>
  );
}

export default Share;
