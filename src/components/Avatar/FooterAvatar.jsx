
const Avatar = ({  alt, author, authorImage ,authorPosition}) => {
    return (
      <div className="d-flex align-items-center my-2">
        <img
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
          <span className="fs-6">{authorPosition}</span>
        </div>
      </div>
    );
  };
  
  export default Avatar;
  