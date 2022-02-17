import { useState } from "react";
import ImageModal from "../Modals/ImageModal";

const ImageWithPopUp = ({ image, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div onClick={clickHandler}>
      <ImageModal show={isModalOpen} image={image} />
      <div className=" bg-dark w-100 " style={{ height: "40rem" }}>
        <img
        loading="lazy"
          src={image ? image : ""}
          alt={alt ? alt : ""}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="position-absolute d-flex justify-content-center align-items-center flex-column flex-md-row"
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          top: "0",
          left: "0",
          backdropFilter: "saturate(180%) blur(10px)",
          gap: "1rem",
        }}
      >
        <img
        loading="lazy"
          src={image ? image : ""}
          alt=""
          style={{ width: "75%", height: "75%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ImageWithPopUp;
