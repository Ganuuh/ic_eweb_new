import { RelativeImage } from "../common";

export const InnerLoanCard = ({
  image,
  title,
  description,
  id,
}: {
  image: string;
  title: string;
  description: string;
  id: number;
}) => {
  return (
    <div className="w-full flex flex-col gap-[0.73vw] rounded-[0.52vw] py-[0.52vw] px-[0.26vw] bg-white">
      <div className="w-full relative rounded-[0.52vw] h-[6.88vw]">
        <RelativeImage src={image} />
      </div>
      <div className="w-full flex flex-col gap-[0.26vw]">
        <p className="text-[#0C293A] text-[0.73vw] font-medium">{title}</p>
        <p className="text-[#808A96] text-[0.65vw] font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};
