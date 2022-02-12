import { Container } from "react-bootstrap";
import image from "../images/main-image.png";
import "./MainImage.css";

const MainImage = () => {
  return (
    <Container fluid={'lg'}className="p-0 m-0 m-md-auto">
        <div className="container-main-image ">
      <img
        src={image}
        alt=""
        className="mt-lg-2 main-image"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <div className="blur-container-main-image p-0 p-lg-5 d-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-start flex-column">
        <span className="ps-0 ps-lg-5">
          <a
            href="#home"
            className="border-0 btn text-light"
            style={{ backgroundColor: "#F2B900" }}
            size="sm"
          >
            {" "}
            INTERVIEWS
          </a>
          <a
            href="#gome"
            className="border-0 ms-2 btn text-light"
            style={{ backgroundColor: "#F2B900" }}
            size="sm"
          >
            {" "}
            MAIN
          </a>
        </span>
        <span className="ps-0 ps-lg-5 mt-3 w-75 text-center text-lg-start">
          <span
            className="text-white fs-2 fw-bold lead"
            style={{ fontSize: "2rem" }}
          >
            DESHABANDHU W. K. H. WEGAPITIYA
          </span>
        </span>
      </div>
    </div>
    </Container>
  );
};

export default MainImage;
