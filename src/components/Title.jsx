const Title = (props) => {
  return (
    <div className="my-3 p-0" style={props.style}>
      <span className="fs-4 m-0  p-0 fw-bold text-dark">{props.children}</span>
      <div className="d-flex ">
      <div
        style={{
          width: "3rem",
          borderBottom:"3px solid #F2B900"
        }}
      ></div>
      <div
        style={{
          width: "100%",
          borderBottom:"2px solid #DFDFDF"
        }}
      ></div>
      </div>
    </div>
  );
};

export default Title;
