import React, { useEffect, useState } from "react";
import { Button, Title } from "../index";

const Url = ({ original, shortened }) => {
  const [canCopy, setCanCopy] = useState(false);
  const copy = () => setCanCopy(true);
  useEffect(() => {
    navigator.clipboard.writeText(shortened);
    return () => setTimeout(() => setCanCopy(false), 60000);
  }, [canCopy]);

  return (
    <li className="w-full bg-white rounded-md flex items-center justify-between gap-6 px-6 py-3 shadow-lg">
      <div className="line-clamp-1">
        <Title
          title={original}
          size={"text-[1.2rem] max-lg:text-xl"}
          weight={"font-medium"}
        />
      </div>
      <div className="flex items-center justify-center gap-8 min-w-fit ">
        <Title
          title={shortened}
          size={"text-[1.2rem] max-lg:text-xl"}
          weight={"font-medium"}
          color={"text-main"}
        />
        {canCopy ? (
          <Button
            desc={"Copied"}
            paddingX={"px-5 py-1.5"}
            radius={"rounded-lg"}
            background={"bg-secondary"}
            key={"copied"}
          />
        ) : (
          <Button
            desc={"Copy"}
            paddingX={"px-5 py-1.5"}
            radius={"rounded-lg"}
            key={"copy"}
            copy={copy}
          />
        )}
      </div>
    </li>
  );
};

export default Url;
