import { RelativeImage } from "../common";

export const AboutUsCard = ({
  img,
  date,
  title,
  body,
  year,
}: {
  img: string;
  date: string;
  title: string;
  body: string;
  year: number;
}) => {
  console.log(img);
  return (
    <div className="w-full flex flex-col bg-[#F8F8F8] p-[12px] gap-[12px] rounded-[12px]">
      <div className="w-full h-[160px] rounded-[12px] overflow-hidden relative">
        <RelativeImage src={img} />
      </div>
      <div className="w-full flex flex-col gap-[8px]">
        <p className="text-[#86949D] text-[13px]">{`${year} ${date}`}</p>
        <p className="text-[#243E4E] text-[14px] font-medium">{title}</p>
      </div>
    </div>
  );
};
