import React from "react";

const Logo = ({ type = "dark" }) => {
  return (
    <a href="#">
      <img
        src="./logo.svg"
        alt="Shortly Logo"
        className={type === "light" ? "brightness-0 invert" : ""}
      />
    </a>
  );
};

export default Logo;
