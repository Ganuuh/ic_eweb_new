import { RelativeImage } from "../common";

export const ImaginationCard = ({
  icon,
  bgImage,
  frImage,
  title,
}: {
  icon: string;
  bgImage: string;
  frImage: string;
  title: string;
}) => {
  return (
    <div className="w-full h-[18.13vw] relative">
      <RelativeImage src={bgImage} />
      <div className="w-full h-full flex flex-col absolute top-0 left-0 py-[1.25vw] px-[1.04vw]"></div>
    </div>
  );
};
