import React, { useState } from "react";

type Props = { count: number; text: string };

const SliceText = (props: Props) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <div className="text">
      <p className={`small m-0`}>
        {isHidden ? props.text.slice(0, props.count) : props.text}
      </p>

      {props.text.length >= props.count && (
        <p
          onClick={() => setIsHidden((prev) => !prev)}
          className="btn btn-link text-decoration-none m-0 mb-4 p-0"
        >
          {isHidden ? "Read more..." : "Read less"}
        </p>
      )}
    </div>
  );
};

export default SliceText;
