import "./LoadingSpinner.css";
const LoadingSpinner = () => {
  return (
    <div
      className="position-fixed top-0 h-100 w-100 d-flex justify-content-center align-items-center bg-dark"
      style={{ zIndex: "2000" }}
    >
      <div class="lds-grid">
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
