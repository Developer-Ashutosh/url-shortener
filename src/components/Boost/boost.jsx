import React from "react";
import { Button, Title } from "../index";

const Boost = () => {
  return (
    <section className="h-[12.5rem] w-full bg-[url(/bg-boost-desktop.svg)] bg-cover bg-center bg-no-repeat bg-tertiary flex flex-col items-center justify-center gap-5">
      <Title
        title={"Boost your links today"}
        color={"text-tertiary"}
        size={"text-5xl"}
      />
      <Button desc={"Get Started"} paddingX={"px-10"} />
    </section>
  );
};

export default Boost;
