import React from "react";

const Button = ({
  desc,
  paddingX,
  radius = "rounded-full",
  background = "bg-main",
  copy,
}) => {
  return (
    <button
      className={`inline-block ${paddingX} py-2 font-medium capitalize text-lg text-tertiary ${background} shadow-lg hover:shadow-xl ${radius} hover:scale-90 hover:opacity-85 transition-transform duration-200 z-10`}
      onClick={copy}
    >
      {desc}
    </button>
  );
};

export default Button;
