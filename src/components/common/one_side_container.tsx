import React from "react";

export const OneSideContainer = ({
  links,
  image,
  title,
  description,
}: {
  links: { path: string; text: string }[];
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={
        ``
        // direction === "left"
        //   ? `w-full h-fit bg-slate-500 md:ml-[max(0px,calc((100%-1000px)))] xl:ml-[max(0px,calc((100%-1040px)))] 2xl:ml-[max(0px,calc((100%-1360px)))]`
        //   : "w-full h-fit bg-slate-500 md:mr-[max(0px,calc((100%-1000px)))] xl:mr-[max(0px,calc((100%-1040px)))] 2xl:mr-[max(0px,calc((100%-1360px)))]"
      }
    ></div>
  );
};
