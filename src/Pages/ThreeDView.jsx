import React from "react";
import { Container } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";

// const PageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className="page page-cover" data-density="hard">
//       <div className="page-content">
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <img
        loading="lazy"
        alt=""
        src={props.image}
        style={{ objectFit: "cover", width: "100%" }}
      ></img>
    </div>
  );
});

function DemoBook(props) {
  return (
    <Container className="justify-content-center d-flex">
      <HTMLFlipBook
        width={400}
        height={600}
        showCover={true}
        maxShadowOpacity={0.5}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
      >
        <Page image="https://4.bp.blogspot.com/-SlUYhKkfRh0/XG8DDj6zP3I/AAAAAAAACxE/yQQWlKGtmwA4_nS8lmk41Q5KOhgg8dAcgCKgBGAs/w3840-h2400-c/disha-patani-bollywood-brunette-girl-4K-245.jpg" />
        <Page image="https://wallpaperaccess.com/full/138728.jpg" />
      </HTMLFlipBook>
    </Container>
  );
}

export default DemoBook;
