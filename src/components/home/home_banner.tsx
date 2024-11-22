"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { RelativeImage, ResponsiveContainer } from "../common";
import { Autoplay } from "swiper/modules";
import { Button } from "antd";
import { format } from "date-fns";

export const HomeBanner = () => {
  return (
    <div className="w-full flex md:h-[27.5vw] h-fit">
      <Swiper className="w-full h-full"></Swiper>
    </div>
  );
};
