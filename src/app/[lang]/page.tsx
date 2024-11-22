import { ResponsiveContainer } from "@/components/common";
import {
  Currency,
  HomeBanner,
  HomeNews,
  ImaginationHome,
} from "@/components/home";
import { Locale } from "@/lib/i18n-config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  return (
    <div className="w-full flex flex-col items-center gap-[60px]">
      {/* <HomeBanner />
      <Currency /> */}
      <HomeNews />
      <ResponsiveContainer>
        <div className="w-full flex flex-col gap-[1.46vw] items-center pt-[140px] pb-[120px]">
          <p className="text-[2.5vw] text-[#0C293A] font-semibold">
            Таны өсөлт бидний үнэ цэнэ
          </p>
          <p className="text-[1.04vw] text-[#191C1F] font-medium text-center leading-[1.67vw] max-w-[50%]">
            Бичил санхүүгийн зах зээлд дэвшилтэт технологи, шинэлэг шуурхай
            үйлчилгээгээрээ Монгол улсдаа тэргүүлэгч бөгөөд энэхүү амжилтаа Төв
            Азийн зах зээлд нутагшуулахаар зорин ажиллаж байна.
          </p>
        </div>
      </ResponsiveContainer>
      <ImaginationHome />
    </div>
  );
}
