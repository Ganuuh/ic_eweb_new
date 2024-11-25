"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { RelativeImage, ResponsiveContainer } from "../common";
import { Autoplay, Navigation } from "swiper/modules";
import { Button } from "antd";
import { format } from "date-fns";

export const HomeBanner = () => {
  return (
    <div className="w-full flex md:h-[27.5vw] h-fit overflow-hidden">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ width: "100%" }}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};
