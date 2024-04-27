import React from "react";

const P = ({ desc, styles }) => {
  return (
    <p
      className={`${styles} text-secondary font-medium text-[1.1rem] tracking-wide leading-[1.4]`}
    >
      {desc}
    </p>
  );
};

export default P;
