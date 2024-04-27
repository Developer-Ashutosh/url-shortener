import React from "react";
import { Title, P, Button } from "../index";

const Landing = () => {
  return (
    <section className="bg-white pl-48 py-28 pb-60 flex items-start justify-start overflow-hidden relative max-xl:pl-32 max-[1120px]:pl-28">
      <div className="space-y-3.5 mt-14 w-1/2">
        <Title
          title={"More than just shorter links."}
          size={"text-7xl max-[1470px]:text-[4rem] max-[1176px]:text-6xl"}
        />
        <P
          desc={
            "Build your brand's recognition and get detailed insights on how your links are performing."
          }
          styles={"max-w-md text-[1.2rem] mb-10"}
        />
        <Button desc={"Get Started"} paddingX={"px-8 py-2.5"} />
      </div>
      <img
        src="./illustration-working.svg"
        alt="Working Img"
        className=" absolute top-1/2 -translate-y-1/2 -right-24 max-[1470px]:scale-90 max-xl:-right-36 max-[1176px]:scale-75 max-[1120px]:-right-40"
      />
    </section>
  );
};

export default Landing;
