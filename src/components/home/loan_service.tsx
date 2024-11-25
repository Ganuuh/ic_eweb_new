"use client";
import { Button } from "antd";
import { ResponsiveContainer } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { InnerLoan } from "./inner_loan";
import { InnerTrust } from "./inner_trust";

export const LoanService = () => {
  const data = [<InnerLoan />, <InnerTrust />, <InnerLoan />, <InnerTrust />];
  const [realIndex, setRealIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setRealIndex(swiper.realIndex);
  };

  return (
    <ResponsiveContainer>
      <div className="w-full flex justify-between items-center h-fit">
        <div className="w-fit h-fit flex flex-col gap-[1.15vw] items-start max-w-[29vw]">
          <div className="text-[#0C293A] text-[2.08vw] flex flex-col font-semibold leading-[2.92vw]">
            <p>Инвескор</p>
            <p>Зээлийн үйлчилгээ авах</p>
          </div>
          <p className="text-[1.04vw] text-[#0C293A] leading-[1.67vw]">
            Богино хугацаанд боломжит хамгийн өндөр дүнгээр, уян хатан
            нөхцөлтэйгээр олон төрлийн зээлийн бүтээгдэхүүнээс сонгоорой.
          </p>
          <Button className="group text-white flex items-center text-[1.1vw] rounded-full bg-[#0C293A] px-[1.67vw] py-[0.52vw]">
            Дэлгэрэнгүй
          </Button>
        </div>

        <div className="w-[45%] h-full  overflow-hidden">
          <div className="w-[200%] h-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              direction="horizontal"
              speed={1000}
              loop
              autoplay={{ delay: 2000 }}
              onSlideChange={handleSlideChange}
              modules={[Autoplay]}
              style={{ width: "100%" }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((each, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-[33.33vw] 2xl:w-[21.5vw] w-[22.5vw] bg-[#F5F5F5CC] px-[1.25vw] py-[1.77vw] rounded-[1.09vw] transition-transform duration-300"
                    style={{
                      transform: `scale(${index === realIndex ? 1 : 0.9})`,
                    }}
                  >
                    {each}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
};
