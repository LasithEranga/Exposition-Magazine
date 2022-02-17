import "./LoadingSpinner.css";
const LoadingSpinner = () => {
  return (
    <div
      className="loader-body position-fixed top-0 h-100 w-100 d-flex flex-column justify-content-center align-items-center bg-dark"
      style={{ zIndex: "2000" }}
    >
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
      <div className="loading display-1 fw-bold">
        <div className="loading-text">
          <span className="loading-text-words">E</span>
          <span className="loading-text-words">X</span>
          <span className="loading-text-words">P</span>
          <span className="loading-text-words">O</span>
          <span className="loading-text-words">S</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">T</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">O</span>
          <span className="loading-text-words">N</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
