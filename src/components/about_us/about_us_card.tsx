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
      <div className="w-full h-[95px] md:h-[160px] rounded-[12px] overflow-hidden relative">
        <RelativeImage src={img} />
      </div>
      <div className="w-full flex flex-col gap-[8px]">
        <p className="text-[#86949D] md:text-[13px] text-[10px] leading-[11px]">{`${year} ${date}`}</p>
        <p className="text-[#243E4E] md:text-[14px] text-[12px] font-medium">
          {title}
        </p>
      </div>
    </div>
  );
};
