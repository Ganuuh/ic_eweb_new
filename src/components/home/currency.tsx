"use client";
import {
  ArrowRightOutlined,
  DownOutlined,
  UpCircleOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { RelativeImage, ResponsiveContainer } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";

export const Currency = () => {
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
  ];

  return (
    <ResponsiveContainer>
      <div className="w-full h-[52px] flex gap-[80px]">
        <div className="w-fit flex flex-col gap-[8px]">
          <p className="text-[#0C293A] text-[1.04vw] whitespace-nowrap font-semibold">
            Валютын ханш
          </p>
          <p className="text-[#94A3B8] text-[0.73vw] font-bold">
            Бэлэн бус / Зарах
          </p>
        </div>
        <div className="w-full h-full flex items-center gap-[40px] bg-red-400">
          <div className="w-full bg-slate-600 h-full">
            <Swiper
              slidesPerView={2}
              speed={1000}
              spaceBetween={20}
              style={{ width: "100%", backgroundColor: "red" }}
              direction="horizontal"
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
                  <div className="w-fit h-full rounded-full  py-[12px] px-[20px] flex gap-[10px] bg-[#F5F7F8] items-center">
                    <div className="h-full aspect-square relative">
                      <RelativeImage src={""} />
                    </div>

                    <p className="text-[#0C293A] md:text-[0.94vw] text-[10px]">
                      {each.currency}
                    </p>
                    <div className="border broder-[#0C293A]"></div>
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
          <div className="h-[80%] border rounded-full"></div>
          <div className="h-[30px] flex justify-center items-center cursor-pointer aspect-square rounded-full bg-[#F5F7F8]">
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
};
