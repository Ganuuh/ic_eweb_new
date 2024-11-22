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
    <div className="w-full flex bg-[#F8F8F8] p-[0.83vw] rounded-[0.83vw] flex-col gap-[16px]">
      <div className="w-full h-[11.15vw] rounded-[16px] relative overflow-hidden">
        <RelativeImage src={image} />
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <p className="text-[0.94vw] text-[#86949D]">
          {format(date, "yyyy-MM-dd hh:mm:ss")}
        </p>
        <p className="text-[0.94vw] text-[#243E4E] font-medium">{title}</p>
      </div>
    </div>
  );
};
