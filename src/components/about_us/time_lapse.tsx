"use client";
import { useEffect, useRef, useState } from "react";
import { ResponsiveContainer } from "../common";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { AboutUsCard } from "./about_us_card";

export const TimeLapseComponent = ({
  json_address,
  title,
}: {
  json_address: string;
  title: string;
}) => {
  const [achievement, setAchievement] = useState<null | any>(null);
  const [activeYear, setActiveYear] = useState<number>(2024);
  const swiperRef = useRef<any | null>(null);
  const achievementYear: any = [
    {
      year: 2024,
    },
    {
      year: 2023,
    },
    {
      year: 2022,
    },
    {
      year: 2021,
    },
    {
      year: 2020,
    },
    {
      year: 2019,
    },
    {
      year: 2018,
    },
    {
      year: 2017,
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    console.log("working");
    if (swiperRef.current && swiperRef.current.swiper) {
      console.log("working inside");
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    const fetchSuccess = async () => {
      let response = await fetch(json_address);
      const json = await response.json();
      setAchievement(json);
    };
    fetchSuccess();
  }, []);
  return achievement ? (
    <div className="w-[100vw] md:w-full flex flex-col gap-[12px] md:gap-[28px] items-center">
      <ResponsiveContainer>
        <div className="w-full h-fit flex flex-col gap-[24px] items-center">
          <p className="text-[#0C293A] text-[24px] font-semibold">{title}</p>
          <div className="w-full flex">
            {achievementYear.map((each: any) => (
              <p
                onClick={() => {
                  setActiveYear(each.year);
                }}
                key={each.year}
                style={{
                  borderColor: activeYear === each.year ? "#0C293A" : "#B6BFC4",
                  color: activeYear === each.year ? "#0C293A" : "#B6BFC4",
                  borderBottom:
                    activeYear === each.year
                      ? "2px solid #0C293A"
                      : " 1px solid #B6BFC4",
                }}
                className="cursor-pointer w-full text-center  py-[5px] text-[16px] font-semibold duration-200"
              >
                {each.year}
              </p>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
      <div className="w-full md:w-[1440px] flex gap-4 items-center justify-center px-[20px]">
        <ArrowLeftOutlined
          onClick={handlePrev}
          // className="border"
          style={{
            fontSize: 20,
            color: "#939393",
            cursor: "pointer",
          }}
        />

        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={40}
          speed={1000}
          loop
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          style={{ width: "100%" }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {achievement.MN[activeYear.toString()].map(
            (each: any, index: number) => {
              const { ...rest } = each;
              return (
                <SwiperSlide key={index} style={{ width: "100%" }}>
                  <AboutUsCard {...rest} />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>

        <ArrowRightOutlined
          onClick={handleNext}
          style={{ fontSize: 20, color: "#939393", cursor: "pointer" }}
        />
      </div>
    </div>
  ) : null;
};
