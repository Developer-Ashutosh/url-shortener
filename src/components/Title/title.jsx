import React from "react";

const Title = ({
  title,
  color = "text-primary",
  size,
  weight = "font-bold",
}) => {
  return (
    <span className={`${color} ${weight} ${size} tracking-wide`}>{title}</span>
  );
};

export default Title;
