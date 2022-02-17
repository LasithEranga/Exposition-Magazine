import { useContext } from "react";
import ArticleDataContext from "../../context/ArticleDataContext";

const Avatar = () => {
  const { alt, author, authorImage, date, readTime } =
    useContext(ArticleDataContext).filteredArticle;
  return (
    <div className="d-flex align-items-center my-2">
      <img
        loading="lazy"
        src={authorImage}
        alt={alt}
        style={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "3.5rem",
          objectFit: "cover",
        }}
      />
      <div className="d-flex flex-column ps-3">
        <span className=" fw-bold">{author}</span>
        <span className="fs-6">
          {date} . {readTime} read
        </span>
      </div>
    </div>
  );
};

export default Avatar;
