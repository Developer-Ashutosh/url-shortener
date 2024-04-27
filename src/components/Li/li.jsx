import React from "react";

const Li = ({ value, href = "#", hover }) => {
  return (
    <li
      className={`inline-block text-secondary text-[1.05rem] font-medium capitalize ${hover} transition-colors cursor-pointer`}
    >
      <a href={href}>{value}</a>
    </li>
  );
};

export default Li;
