import { Button } from "antd";
import { RelativeImage } from "../common";

export const OhinCompany = () => {
  return (
    <div className="w-full flex gap-[7.81vw] items-center pt-[8.33vw] flex-col-reverse md:flex-row">
      <div className="md:w-[45.83vw] md:h-[26.35vw] w-full h-[400px] relative">
        <RelativeImage src="/home/ohin_company.png" />
      </div>
      <div className="flex flex-col gap-[12px] md:gap-[1.3vw]  px-[25px] md:px-0">
        <p className="text-[#0C293A] md:text-[2.34vw] font-semibold text-[20px]">
          Охин компаниуд
        </p>
        <p className="text-[#0C293A] text-[14px] leading-[24px] md:leading-[1.67vw] font-normal md:text-[1.3vw] md:max-w-[28.13vw]">
          Инвескор Санхүүгийн байгууллага нь Кыргыз улсад 4 салбар, Казакстан
          улсад 1 салбар, Узбекистан улсад үйл ажиллагаа эрхлэх тусгай
          зөвшөөрлөө авахаар Төв Азийн зах зээлд тэлэлт хийн ажиллаж байна.
        </p>
        <Button className="rounded-full bg-[#0C293A] text-[12px] leading-[14px] md:text-[1.1vw] font-medium text-white w-fit">
          Дэлгэрэнгүй
        </Button>
      </div>
    </div>
  );
};
