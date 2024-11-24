"use client";
import {
  ArrowRightOutlined,
  DownOutlined,
  UpCircleOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { RelativeImage, ResponsiveContainer } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

export const Currency = () => {
  const swiperRef = useRef<any | null>();
  const currency = [
    {
      currency: "USD",
      rate: 3382.0,
      change: "up",
    },
    {
      currency: "CNY",
      rate: 481.5,
      change: "up",
    },
    {
      currency: "GBP",
      rate: 4526.0,
      change: "down",
    },
    {
      currency: "RUB",
      rate: 38.03,
      change: "up",
    },
    {
      currency: "CNY",
      rate: 481.5,
      change: "up",
    },
    {
      currency: "GBP",
      rate: 4526.0,
      change: "down",
    },
  ];

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      console.log("working inside");
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <ResponsiveContainer>
      <div className="w-full h-fit flex items-center  justify-between">
        <div className="w-fit flex flex-col gap-[8px]">
          <p className="text-[#0C293A] text-[1.04vw] whitespace-nowrap font-semibold">
            Валютын ханш
          </p>
          <p className="text-[#94A3B8] text-[0.73vw] font-bold">
            Бэлэн бус / Зарах
          </p>
        </div>
        <div className="h-full w-[80%] flex justify-between items-center">
          <div className="w-[90%] items-center flex justify-start  h-full">
            <Swiper
              ref={swiperRef}
              slidesPerView={2}
              speed={1000}
              spaceBetween={40}
              style={{ width: "100%" }}
              direction="horizontal"
              modules={[Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {currency.map((each, index) => (
                <SwiperSlide key={index} style={{ width: "100%" }}>
                  <div className="w-fit h-full rounded-full  py-[0.63vw] px-[1.25vw] flex gap-[10px] bg-[#F5F7F8] items-center">
                    <div className="h-[16px] aspect-square relative">
                      <RelativeImage src={""} />
                    </div>

                    <p className="text-[#0C293A] md:text-[0.94vw] text-[10px]">
                      {each.currency}
                    </p>
                    <div className="h-1 w-1  bg-[#0C293A] rounded-full"></div>
                    <p className="text-[#0C293A] md:text-[0.94vw] text-[10px] font-medium leading-[24px]">
                      {each.rate}
                    </p>
                    {each.change == "up" ? (
                      <UpOutlined className="text-green-600 text-[10px] font-semibold" />
                    ) : (
                      <DownOutlined className="text-red-600 text-[10px] font-semibold" />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="h-[30px] border rounded-full"></div>
          <div
            onClick={handleNext}
            className="h-[30px] flex justify-center items-center cursor-pointer aspect-square rounded-full bg-[#F5F7F8]"
          >
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
};
