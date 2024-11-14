"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchSuccess = async () => {
      let response = await fetch(json_address);
      const json = await response.json();
      setAchievement(json);
    };
    fetchSuccess();
  }, []);
  return achievement ? (
    <div className="w-full flex flex-col gap-[28px] items-center">
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
      <div className="flex gap-4 items-center">
        <ArrowLeftOutlined
          style={{ fontSize: 20, color: "#939393", cursor: "pointer" }}
        />
        <ResponsiveContainer>
          <div className="w-full h-fit flex  gap-[40px] ">
            <Swiper
              slidesPerView={2}
              spaceBetween={40}
              speed={700}
              loop
              autoplay
              modules={[Autoplay]}
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
          </div>
        </ResponsiveContainer>
        <ArrowRightOutlined
          style={{ fontSize: 20, color: "#939393", cursor: "pointer" }}
        />
      </div>
    </div>
  ) : null;
};
