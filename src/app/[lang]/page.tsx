import { RelativeImage, ResponsiveContainer } from "@/components/common";
import {
  BottomCard,
  Currency,
  HomeBanner,
  HomeNews,
  ImaginationHome,
  LoanService,
  OhinCompany,
} from "@/components/home";
import { Locale } from "@/lib/i18n-config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  return (
    <div className="w-full flex flex-col items-center gap-[60px] md:gap-[4.17vw] bg-white overflow-hidden">
      <HomeBanner />
      <Currency />
      <HomeNews />
      <ResponsiveContainer>
        <div className="w-full flex flex-col gap-[1.46vw] items-center pt-[140px] pb-[120px]">
          <p className="md:text-[2.5vw] text-[20px] text-[#0C293A] font-semibold">
            Таны өсөлт бидний үнэ цэнэ
          </p>
          <p className="text-[15px] md:text-[1.04vw] text-[#191C1F] font-medium text-center leading-[20px] md:leading-[1.67vw] md:max-w-[50%]">
            Бичил санхүүгийн зах зээлд дэвшилтэт технологи, шинэлэг шуурхай
            үйлчилгээгээрээ Монгол улсдаа тэргүүлэгч бөгөөд энэхүү амжилтаа Төв
            Азийн зах зээлд нутагшуулахаар зорин ажиллаж байна.
          </p>
        </div>
      </ResponsiveContainer>
      <ImaginationHome />
      <LoanService />
      <OhinCompany />
      <BottomCard />
      <ResponsiveContainer>
        <div className="w-full   h-fit pt-[7.29vw] pb-[120px] md:pb-[12.5vw]">
          <div className="w-full h-[24.90vw] relative rounded-[20px] hidden md:flex">
            <RelativeImage src="/home/home_bottom.png" />
          </div>
          <div className="w-full h-[586px] relative rounded-[20px] flex md:hidden overflow-hidden">
            <RelativeImage src="/home/home_bottom_res.png" />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
