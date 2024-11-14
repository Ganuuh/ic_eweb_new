import React from "react";
import { RelativeImage } from "./relative_image";

export const CardWithBackground = ({
  image,
  justify,
  items,
  innerText,
  pt = 32,
  pl = 24,
}: {
  image: string;
  justify: string;
  items: string;
  innerText: React.ReactNode;
  pt?: number;
  pl?: number;
}) => {
  return (
    <div
      className="w-full h-full flex relative rounded-[20px] overflow-hidden"
      //   style={{
      //     background:
      //       "linear-gradient(90deg, #FFFFFF 0%, #F9FBFB 50%, #E9ECED 100%)",
      //   }}
    >
      <RelativeImage src={image} />
      <div
        style={{
          paddingLeft: pl,
          paddingRight: pl,
          paddingTop: pt,
          paddingBottom: pt,
        }}
        className={`h-full w-full absolute z-10 top left-0 flex px-[${pl}px] py-[${pt}px]  ${justify} ${items} `}
      >
        {innerText}
      </div>
    </div>
  );
};
