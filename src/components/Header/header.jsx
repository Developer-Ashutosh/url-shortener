import React from "react";
import { Button, Li, Logo } from "../index";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const items = ["Features", "Pricing", "Resources"];

  return (
    <header className="px-48 pt-10 flex items-center justify-between w-full bg-white max-xl:px-32">
      <div className="flex items-center justify-center gap-14">
        <Logo />
        <ul className="flex items-center justify-start gap-6">
          {items.map((item) => (
            <Li value={item} hover={"hover:text-primary"} key={uuidv4()} />
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-6">
        <ul>
          <Li value={"Login"} hover={"hover:text-primary"} />
        </ul>
        <Button desc={"Sign Up"} paddingX={"px-6"} />
      </div>
    </header>
  );
};

export default Header;
