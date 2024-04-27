import React, { useState } from "react";
import { Button, Url } from "../index";
import { v4 as uuidv4 } from "uuid";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  return (
    <section className="w-3/4 m-auto relative pb-16 pt-24 max-[1164px]:w-5/6">
      <form
        className="h-36 w-full bg-[url(/bg-shorten-desktop.svg)] bg-cover bg-no-repeat bg-tertiary flex items-center justify-center gap-5 rounded-md p-14 absolute -top-[4.5rem]"
        onSubmit={(e) => {
          e.preventDefault();
          if (url.length !== 0) {
            fetch("https://cleanuri.com/api/v1/shorten", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `url=${encodeURIComponent(url)}`,
            })
              .then((response) => response.json())
              .then(({ result_url }) =>
                setUrls((urls) => [
                  ...urls,
                  { original: url, shortened: result_url },
                ])
              )
              .catch((error) => console.error("Error:", error));
          }
        }}
      >
        <input
          type="url"
          value={url}
          className="h-12 flex-auto rounded-md px-3.5 font-medium text-primary text-[1.1rem] placeholder:text-secondary caret-main outline-none border-[2px] border-transparent invalid:border-error peer"
          placeholder="Shorten a link here..."
          onInput={(e) => setUrl(e.target.value)}
        />
        <span className="peer-valid:opacity-0 text-error italic tracking-wider absolute left-16 bottom-3.5 transition-opacity">
          Please add a valid link!
        </span>
        <Button
          desc={"Shorten It!"}
          paddingX={"px-3.5 py-2.5"}
          radius={"rounded-lg"}
        />
      </form>
      <ul className="w-full flex flex-col gap-4">
        {urls.map(({ original, shortened }) => (
          <Url original={original} shortened={shortened} key={uuidv4()} />
        ))}
      </ul>
    </section>
  );
};

export default Shortener;
