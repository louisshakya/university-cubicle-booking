import React from "react";

export const BookMark = ({
  fill = "#F16D6E",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 501.333 501.333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M425.6,0H75.733C34.133,0,0,34.133,0,76.8v424.533L250.667,348.8l250.667,152.533V76.8C501.333,34.133,467.2,0,425.6,0z"
        fill={fill}
      />
    </svg>
  );
};
