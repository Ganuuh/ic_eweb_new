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
      <div className="w-full flex flex-col md:flex-row justify-between items-center h-fit pt-[8.33vw] gap-[40px] md:gap-0">
        <div className="md:w-fit w-full h-fit flex flex-col gap-[14px] md:gap-[1.15vw] items-start md:max-w-[29vw]">
          <div className="text-[#0C293A] md:text-[2.08vw] flex flex-col font-semibold md:leading-[2.92vw] leading-[24px] text-[20px]">
            <p>Инвескор</p>
            <p>Зээлийн үйлчилгээ авах</p>
          </div>
          <p className=" text-[14px] leading-[24px] md:text-[1.04vw] text-[#0C293A]  md:leading-[1.67vw]">
            Богино хугацаанд боломжит хамгийн өндөр дүнгээр, уян хатан
            нөхцөлтэйгээр олон төрлийн зээлийн бүтээгдэхүүнээс сонгоорой.
          </p>
          <Button className="group text-white flex items-center md:text-[1.1vw] rounded-full bg-[#0C293A] px-[20px] py-[8px] md:px-[1.67vw] md:py-[0.52vw] text-[12px] leading-[14px]">
            Дэлгэрэнгүй
          </Button>
        </div>

        <div className="md:w-[45%] w-full h-full overflow-hidden md:overflow-visible">
          <div className="md:w-[200%] w-[130%] xl:w-[220%] h-full">
            <Swiper
              slidesPerView={2}
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
                    className="md:h-[33.33vw] h-[320px] w-[220px] 2xl:w-[21.5vw] md:w-[22.5vw] rounded-[12px] bg-[#F5F5F5CC] md:px-[1.25vw] md:py-[1.77vw] px-[12px] py-[18px] md:rounded-[1.09vw] transition-transform duration-300"
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
