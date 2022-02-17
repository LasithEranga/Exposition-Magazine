import { Carousel } from "react-bootstrap";
import "./SuccessStories.css";

const SuccessStoryCarousel = ({ stories }) => {
  return (
    <Carousel
      controls={false}
      fade
      className="position-relative p-0 "
      pause={false}
    >
      {stories
        ? stories.map((story, index) => (
            <Carousel.Item key={index} interval={1000}>
              <div className=" bg-dark w-100 " style={{ height: "40rem" }}>
                <img
                  loading="lazy"
                  src={story.image ? story.image : ""}
                  alt={story.alt ? story.alt : ""}
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
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "15rem",
                    objectFit: "cover",
                  }}
                  src={story.image ? story.image : ""}
                  alt={story.alt ? story.alt : ""}
                />
                <div
                  className="testomonial-width mx-2  bg-light p-4 fst-italic d-flex justify-content-center align-items-center flex-column"
                  style={{
                    borderRadius: "1.5rem",
                    height: "fit-content",
                  }}
                >
                  <p className="">{story.content ? story.content : ""}</p>
                  <div className="w-100 text-end fst-normal fw-bold">
                    {story.name ? story.name : ""}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))
        : ""}
    </Carousel>
  );
};

export default SuccessStoryCarousel;
