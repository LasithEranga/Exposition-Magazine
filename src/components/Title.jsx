const Title = (props) => {
  return (
    <div className="my-3" style={props.style}>
      <span className="fs-4 m-0  p-0 fw-bold text-dark">{props.children}</span>
      <div className="d-flex ">
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
