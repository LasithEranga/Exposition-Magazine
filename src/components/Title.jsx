const Title = ({title}) => {
  return (
    <div className="my-3">
      <span className="fs-4 m-0 ms-1 p-0 fw-bold text-dark">{title}</span>
      <div className="d-flex ms-1">
      <div
        style={{
          width: "5%",
          height: "0.08rem",
          backgroundColor: "#F2B900"
        }}
      ></div>
      <div
        style={{
          width: "95%",
          height: "0.05rem",
          backgroundColor: "#DFDFDF"
        }}
      ></div>
      </div>
    </div>
  );
};

export default Title;
