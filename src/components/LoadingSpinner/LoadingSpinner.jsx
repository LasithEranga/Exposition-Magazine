import "./LoadingSpinner.css";
const LoadingSpinner = () => {
  return (
    <div
      className="position-fixed top-0 h-100 w-100 d-flex flex-column justify-content-center align-items-center bg-dark"
      style={{ zIndex: "2000" }}
    >
      <h2 className="text-white pb-2">Developer Preview</h2>
      {/* <h4 className="text-white pb-2">Electron Labs | 2022</h4> */}
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
