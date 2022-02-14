
const Avatar = ({  alt, author, authorImage }) => {
    return (
      <div className="d-flex align-items-center my-2">
        <img
          src={"https://epe.brightspotcdn.com/dims4/default/6ea98a4/2147483647/strip/true/crop/2304x2304+0+0/resize/100x100!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2F37%2Fba%2F6c92af9140fe90824a17c9b5b247%2Fandrew-ujifusa-blue-sq2.jpg"}
          alt={alt}
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "3.5rem",
            objectFit: "cover",
          }}
        />
        <div className="d-flex flex-column ps-3">
          <span className=" fw-bold">{author} Andrew Ujifusa</span>
          <span className="fs-6">Assistant Editor,  Education Week</span>
        </div>
      </div>
    );
  };
  
  export default Avatar;
  