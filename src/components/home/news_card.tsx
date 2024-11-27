import { format } from "date-fns";
import { RelativeImage } from "../common";

export const NewsCard = ({
  image,
  title,
  date,
  description,
}: {
  image: string;
  title: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="md:w-full w-[260px] flex bg-[#F8F8F8] p-[10px] md:p-[0.83vw] rounded-[12px] md:rounded-[0.83vw] flex-col gap-[16px]">
      <div className="w-full md:h-[11.15vw] h-[128px] rounded-[16px] relative overflow-hidden">
        <RelativeImage src={image} />
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <p className="md:text-[0.94vw] text-[#86949D] text-[12px]">
          {format(date, "yyyy-MM-dd hh:mm:ss")}
        </p>
        <p className="md:text-[0.94vw] text-[#243E4E] font-medium text-[14px]">
          {title}
        </p>
      </div>
    </div>
  );
};
