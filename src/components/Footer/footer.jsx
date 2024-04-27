import React from "react";
import { Title, Li, Logo } from "../index";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
  const data = [
    {
      title: "Features",
      list: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      list: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      list: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  return (
    <footer className="w-full py-16 pl-48 pr-12 bg-primary flex items-start justify-between max-[1180px]:pl-20">
      <Logo type={"light"} />
      <section className="w-3/4 flex items-start justify-between">
        {data.map(({ title, list }) => (
          <div className="flex flex-col items-center gap-3" key={uuidv4()}>
            <Title title={title} color={"text-tertiary"} size={"text-xl"} />
            <ul className="flex flex-col items-center gap-1">
              {list.map((item) => (
                <Li value={item} hover={"hover:text-main"} key={uuidv4()} />
              ))}
            </ul>
          </div>
        ))}
        <div>
          <ul className="flex gap-1.5 max-[1164px]:flex-col">
            {["facebook", "twitter", "pinterest", "instagram"].map((e) => (
              <li
                className="p-1 h-10 w-10 border border-transparent rounded-full hover:border-main hover:scale-110 flex items-center justify-center cursor-pointer transition-all"
                key={uuidv4()}
              >
                <img src={`./${e}.svg`} alt={`${e} Logo`} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
