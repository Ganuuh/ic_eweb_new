import {
  Banners,
  PreciousThings,
  Business,
  Collaboration,
  TimeLapseComponent,
} from "@/components/about_us";
import { BannerContainer, ResponsiveContainer } from "@/components/common";
import { format } from "date-fns";

export default function Company() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <BannerContainer
        title="Бидний тухай"
        links={["Нүүр", "Компани"]}
        image="/company/about_us_banner.png"
        responsive_image="/company/about_us_banner.png"
        textClassName="text-white"
        description="Бичил санхүүгийн зах зээлд дэвшилтэт технологи, шинэлэг шуурхай үйлчилгээгээрээ Монгол улсдаа тэргүүлэгч бөгөөд энэхүү амжилтаа Төв Азийн зах зээлд нутагшуулахаар зорин ажиллаж байна."
      />

      <div className="w-fit flex flex-col items-center md:gap-[100px] gap-[40px]  pt-[40px] md:pb-[100px] pb-[40px]">
        <ResponsiveContainer>
          <div className=" w-full md:hidden flex flex-col gap-[16px]">
            <p className="text-[#808A96] text-[14px] leading-[18px]">
              {format(Date.now(), "yyyy-MM-dd")}
            </p>
            <p className="text-[#191C1F] text-[14px] leading-[24px]">
              Инвескор санхүүгийн байгууллага Казахстан Улсад охин компаниа
              байгууллаа. Тодруулбал, “Инвескор ББСБ” ХК нь Төв Ази дахь үйл
              ажиллагаагаа тэлж Казахстан улсад “Инвескор Финанс” охин компаниа
              байгуулах албан ёсны нээлтийн үйл ажиллагаа 2024 оны есдүгээр
              сарын 14-нд боллоо. Ингэснээр бид төв азийн 2 дахь улсдаа охин
              компаниа байгуулж, үйл ажиллагаа эрхэлж буй бөгөөд Монгол
              санхүүгийн байгууллага олон улсад зах зээлээ тэлж, гаднын
              хэрэглэгчдэд хүрч үйлчилгээ үзүүлэх боломж бүрдэж байгаа дээр
              Монгол мэргэжилтнүүд ч Төв Азид олноороо ажиллаж, удирдан
              түүчээлэх үүд хаалга улам өргөжин тэлсээр байна.
            </p>
          </div>
        </ResponsiveContainer>
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
      </div>
    </div>
  );
}
