/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";

const useGallery = ({
  hideClass,
  speed,
  delay,
}: {
  hideClass: any;
  speed: any;
  delay: any;
}) => {
  // For Images Parent
  const boxRef = useRef<any>();

  // Index For Img
  const [, setNewIdx] = useState(0);

  const changeIdx = useCallback(
    () =>
      setNewIdx((prev) => {
        // Children Of Imgs Box
        const allImags = boxRef.current.childNodes;
        // Img Target
        const targetImg = allImags[prev];

        if (prev <= 0) {
          // Remove hide Class
          allImags.forEach((img: any) => img.classList.remove(hideClass));
          // reset Idx
          return allImags.length - 1;
        } else {
          // add hide Class
          targetImg.classList.add(hideClass);
          // decrement Idx
          return prev - 1;
        }
      }),
    [hideClass]
  );

  // Set "setInterval" on frist Render
  useEffect(() => {
    //
    const allImags = boxRef.current.childNodes;

    // Fitrst Reset Nums
    setNewIdx(allImags.length - 1);

    // !Firs Delay
    const newDelay = speed * 1000 + delay * 1000;

    // for First Img
    new Promise((res) => setTimeout(() => res(changeIdx()), delay * 1000))
      // Start InterVal [Put New Delay After First Img]
      .then(() => setInterval(changeIdx, newDelay));

    // Put transition in imgs
    allImags.forEach((img: any) => (img.style.transition = `${speed}s`));
  }, [changeIdx, speed, delay]);

  return { boxRef };
};

export default useGallery;
