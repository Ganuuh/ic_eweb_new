import {
  Banners,
  PreciousThings,
  Business,
  Collaboration,
  TimeLapseComponent,
} from "@/components/about_us";
import { BannerContainer } from "@/components/common";

export default function Company() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <BannerContainer
        title="Бидний тухай"
        links={["Нүүр", "Компани"]}
        image="/company/about_us_banner.png"
        responsive_image="/company/about_us_banner.png"
        description="Бичил санхүүгийн зах зээлд дэвшилтэт технологи, шинэлэг шуурхай үйлчилгээгээрээ Монгол улсдаа тэргүүлэгч бөгөөд энэхүү амжилтаа Төв Азийн зах зээлд нутагшуулахаар зорин ажиллаж байна."
      />
      {/* <div className="w-fit flex flex-col items-center gap-[100px] pt-[40px] pb-[100px]">
        <Banners />
        <PreciousThings />
        <Business />
        <Collaboration />
        <TimeLapseComponent
          json_address="/jsons/achievement.json"
          title="Амжилт"
        />
        <TimeLapseComponent
          json_address="/jsons/historicalTrajectory.json"
          title="Түүхэн замнал"
        />
      </div> */}
    </div>
  );
}
