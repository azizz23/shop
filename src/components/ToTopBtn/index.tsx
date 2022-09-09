import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { scrollTo } from "seamless-scroll-polyfill";

const ToTopBtn = ({ scroll }: { scroll: number }) => {
  const [isActive, setIsActive] = useState(false);

  // Show Btn
  useEffect(() => {
    if (scroll >= 600) {
      setIsActive(true);
    } //
    else {
      setIsActive(false);
    }
  }, [scroll]);

  const scrollToTop = () => {
    scrollTo(window, {
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`toTopBtn ${
        isActive ? "active" : ""
      } flex-center cu-pointer text-light`}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ToTopBtn;
