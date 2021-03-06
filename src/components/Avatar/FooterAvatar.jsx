import { useContext } from "react";
import ArticleDataContext from "../../context/ArticleDataContext";

const Avatar = () => {
  const {
    alt,
    author,
    authorImage,
    authorPositionOne,
    authorPositionTwo,
    authorPositionThree,
  } = useContext(ArticleDataContext).filteredArticle;
  return (
    <div className="d-flex align-items-center my-2">
      <img
      loading="lazy"
        src={authorImage}
        alt={alt}
        style={{
          width: "5rem",
          height: "5rem",
          borderRadius: "3.5rem",
          objectFit: "cover",
        }}
      />
      <div className="d-flex flex-column ps-3">
        <span className=" fw-bold">{author}</span>
        <span className="fs-6">{authorPositionOne}</span>
        <span className="fs-6">{authorPositionTwo}</span>
        <span className="fs-6">{authorPositionThree}</span>
      </div>
    </div>
  );
};

export default Avatar;
