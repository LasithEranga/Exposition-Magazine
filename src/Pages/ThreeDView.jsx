import React from "react";
import { Container } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import er from "./er.png";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

function DemoBook(props) {
  return (
    <Container className="justify-content-center d-flex">
      <HTMLFlipBook width={400} height={600}  showCover={true}  maxShadowOpacity={0.5} size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533} >
        <div className="demoPage">
          <img src={er} style={{ objectFit: "cover", width: "100%" }}></img>
        </div>
        <div className="demoPage">
          <img src={er} style={{ objectFit: "cover", width: "100%" }}></img>
        </div>
        <div className="demoPage">
          <img src={er} style={{ objectFit: "cover", width: "100%" }}></img>
        </div>
        <div className="demoPage">
          <img src={er} style={{ objectFit: "cover", width: "100%" }}></img>
        </div>
        <div className="demoPage">
          <img src={er} style={{ objectFit: "cover", width: "100%" }}></img>
        </div>
        <div className="demoPage">
          <img src={er} style={{ objectFit: "cover", width: "100%" }}></img>
        </div>
        <div className="demoPage"></div>
      </HTMLFlipBook>
    </Container>
  );
}

export default DemoBook;
