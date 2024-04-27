import React from "react";
import { Card, Title, P } from "../index";
import { v4 as uuidv4 } from "uuid";

const Statistics = () => {
  const cardDetails = [
    {
      title: "Brand Recognition",
      desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      src: "brand-recognition.svg",
      margin: "mt-0",
    },
    {
      title: "Detailed Records",
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      src: "detailed-records.svg",
      margin: "mt-24",
    },
    {
      title: "Fully Customizable",
      desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      src: "fully-customizable.svg",
      margin: "mt-48",
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center space-y-2.5">
        <Title title={"Advanced Statistics"} size={"text-5xl"} />
        <P
          desc={
            "Track how your links are performing across the web with our advanced statistics dashboard."
          }
          styles={"text-center max-w-lg"}
        />
      </div>
      <div className="flex justify-center items-center gap-11 pb-28 max-[1164px]:gap-8">
        {cardDetails.map(({ src, title, desc, margin }) => (
          <Card
            src={src}
            title={title}
            desc={desc}
            margin={margin}
            key={uuidv4()}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
