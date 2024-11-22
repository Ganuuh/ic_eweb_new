"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ResponsiveContainer } from "../common";
import { ImaginationCard } from "./imagination_card";
import { Autoplay, Pagination } from "swiper/modules";

export const ImaginationHome = () => {
  const data = [
    {
      icon: "shield",
      bg: "/home/im1.png",
      title: "Мэдээллийн аюулгүй байдлын стандартыг бүрэн хангасан",
      description: "ISO 9001, ISO 27001 зэрэг стандартыг мөрдөж ажилладаг.",
    },
    {
      icon: "lightning",
      bg: "/home/im1.png",
      title: "Зээлийн хүсэлтийг хамгийн богино хугацаанд шийдвэрлэнэ",
      description: "Өндөр хурдтай үйлчилгээ.",
    },
    {
      icon: "building",
      bg: "/home/im1.png",
      title: "Бид харилцагчдадаа 2 төрлийн санал болгож байна",
      description: "Тусгай саналыг ашиглах боломж.",
    },
    {
      icon: "team",
      bg: "/home/im1.png",
      title: "Хамгийн олон харилцагчтай, зах зээлийн тэргүүлэгчдийн нэг",
      description: "Харилцагчийн итгэлтэй хамтрагч.",
    },
    {
      icon: "money",
      bg: "/home/im1.png",
      title:
        "Өөрийн хөрөнгөө сүүлийн 5 жилийн хугацаанд 8.6 дахин өсгөж амжилттай ажилласан",
      description: "Хуримтлалын өсөлт.",
    },
  ];
  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col gap-[3.13vw] items-center">
        <p className="text-[1.67vw] text-[#191C1F] font">
          Төсөөллийг тань хамтдаа бүтээе
        </p>
        <div className="w-full">
          <Swiper
            style={{ width: "100%" }}
            slidesPerView={5}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {data.map((each, index) => {
              return (
                <SwiperSlide key={index} style={{ width: "100%" }}>
                  <ImaginationCard
                    icon={""}
                    bgImage={each.bg}
                    frImage={""}
                    title={each.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ResponsiveContainer>
  );
};
