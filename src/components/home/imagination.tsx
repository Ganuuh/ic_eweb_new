"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { RelativeImage, ResponsiveContainer } from "../common";
import { ImaginationCard } from "./imagination_card";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

export const ImaginationHome = () => {
  const data = [
    {
      icon: "money",
      bg: "/home/im5.png",
      title:
        "Өөрийн хөрөнгөө сүүлийн 5 жилийн хугацаанд 8.6 дахин өсгөж амжилттай ажилласан",
      description: "Хуримтлалын өсөлт.",
    },
    {
      icon: "shield",
      bg: "/home/im1.png",
      title: "Мэдээллийн аюулгүй байдлын стандартыг бүрэн хангасан",
      description: "ISO 9001, ISO 27001 зэрэг стандартыг мөрдөж ажилладаг.",
    },
    {
      icon: "lightning",
      bg: "/home/im2.png",
      title: "Зээлийн хүсэлтийг хамгийн богино хугацаанд шийдвэрлэнэ",
      description: "Өндөр хурдтай үйлчилгээ.",
    },
    {
      icon: "building",
      bg: "/home/im3.png",
      title: "Бид харилцагчдадаа 2 төрлийн санал болгож байна",
      description: "Тусгай саналыг ашиглах боломж.",
    },
    {
      icon: "team",
      bg: "/home/im4.png",
      title: "Хамгийн олон харилцагчтай, зах зээлийн тэргүүлэгчдийн нэг",
      description: "Харилцагчийн итгэлтэй хамтрагч.",
    },
    {
      icon: "money",
      bg: "/home/im5.png",
      title:
        "Өөрийн хөрөнгөө сүүлийн 5 жилийн хугацаанд 8.6 дахин өсгөж амжилттай ажилласан",
      description: "Хуримтлалын өсөлт.",
    },
    {
      icon: "shield",
      bg: "/home/im1.png",
      title: "Мэдээллийн аюулгүй байдлын стандартыг бүрэн хангасан",
      description: "ISO 9001, ISO 27001 зэрэг стандартыг мөрдөж ажилладаг.",
    },
  ];

  const [realIndex, setRealIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setRealIndex(swiper.realIndex);
  };

  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col gap-[3.13vw] pb-20 md:items-center items-start">
        <p className="text-[1.67vw] text-[#191C1F] font-semi-bold hidden md:flex">
          Төсөөллийг тань хамтдаа бүтээе
        </p>
        <div className="w-full flex flex-col gap-[12px] items-start md:hidden">
          <div className="w-[170px] h-[38px] relative">
            <RelativeImage src="/home/inovate.gif" />
          </div>
          <p className="text-[#191C1F] text-[14px] leading-[24px]">
            Бичил санхүүгийн зах зээлд дэвшилтэт технологи, шинэлэг шуурхай
            үйлчилгээгээрээ Монгол улсдаа тэргүүлэгч бөгөөд энэхүү амжилтаа Төв
            Азийн зах зээлд нутагшуулахаар зорин ажиллаж байна.
          </p>
        </div>
        <div className="flex w-full items-center h-[292px]">
          <div className="w-[350%] md:w-full h-fit">
            <Swiper
              style={{ width: "100%" }}
              speed={1000}
              slidesPerView={5}
              slidesPerGroup={1}
              spaceBetween={20}
              modules={[Autoplay, Pagination]}
              onSlideChange={handleSlideChange}
              pagination={true}
              loop
              className="mySwiper"
              autoplay={{ delay: 3000 }}
            >
              {data.map((each, index) => {
                const middleIndex =
                  (realIndex + Math.floor(5 / 2)) % data.length;
                const firstIndex = realIndex % data.length;

                return (
                  <SwiperSlide key={index} className="w-full h-fit self-center">
                    <div
                      className={`${
                        index === middleIndex ? "md:scale-100" : "md:scale-90"
                      } ${
                        index === firstIndex ? "scale-100" : "scale-90"
                      }  h-full flex transition-all duration-500 rounded-[16px] overflow-hidden`}
                    >
                      <ImaginationCard
                        icon={each.icon}
                        bgImage={each.bg}
                        frImage={""}
                        title={each.title}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="swiper-pagination mt-4 w-full bg-red-500"></div>
      </div>
    </ResponsiveContainer>
  );
};
