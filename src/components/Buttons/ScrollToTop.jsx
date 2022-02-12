import { useCallback, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const scrollEventhandler = useCallback(() => {
    window.scrollY > 300 ? setisScrolling(true) : setisScrolling(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEventhandler);

    return () => {
      window.removeEventListener("scroll", scrollEventhandler);
    };
  }, [scrollEventhandler]);

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    isScrolling && (
      <div
        className="d-flex justify-content-center align-items-center"
        onClick={clickHandler}
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "3rem",
          position: "fixed",
          bottom: "1rem",
          right: "1.5rem",
          backgroundColor: "#F2B900",
          boxShadow: " 0px 8px 15px rgba(0, 0, 0, 0.1)",
          zIndex:"1000",
        }}
      >
        <IoIosArrowUp size={30} style={{ color: "white" }} />
      </div>
    )
  );
};

export default ScrollToTop;
