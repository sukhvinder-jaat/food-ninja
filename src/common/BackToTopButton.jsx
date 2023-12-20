import { useState, useEffect } from "react";
import { UpArrowIcon } from "./Icons";
const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <>
      {showButton && (
        <div
          className="topscroll bg-gradient_color fixed h-[45px] w-[45px] right-[15px] bottom-[25px] rounded-full z-[100] flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTop()}
        >
          <UpArrowIcon />
        </div>
      )}
    </>
  );
};
export default BackToTopButton;
