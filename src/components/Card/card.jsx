import React from "react";
import { Title, P } from "../index";

const Card = ({ src, title, desc, margin }) => {
  return (
    <div
      className={`h-64 w-[22rem] bg-white rounded-md shadow-lg p-6 flex flex-col justify-center ${margin} relative space-y-1.5 before:absolute before:top-16 before:-left-11 before:h-2.5 before:w-11 before:bg-main first:before:hidden max-[1164px]:w-[19.5rem] max-[1164px]:h-60 max-[1164px]:before:w-8 max-[1164px]:before:-left-8`}
    >
      <span className="absolute -top-8 left-8 h-20 w-20 bg-tertiary flex items-center justify-center rounded-full max-[1164px]:h-[4.5rem] max-[1164px]:w-[4.5rem]">
        <img src={src} alt="" className="scale-95" />
      </span>
      <Title title={title} size={"text-[1.35rem]"} />
      <P desc={desc} styles={"text-[1rem]"} />
    </div>
  );
};

export default Card;
