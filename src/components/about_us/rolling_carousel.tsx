"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export const RollingCarousel = ({
  images,
  position,
  className,
  slidesPerview,
  responsiveSlidePerView,
}: {
  images: string[];
  position: "right" | "left";
  className?: string;
  slidesPerview: number;
  responsiveSlidePerView: number;
}) => {
  return (
    <div className={`w-full h-fit  overflow-hidden ${className}`}>
      <Swiper
        slidesPerView={responsiveSlidePerView}
        spaceBetween={26}
        speed={3000}
        loop
        modules={[Autoplay]}
        className="swiperClass"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: position === "left",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: slidesPerview,
          },
        }}
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <div className="w-full md:h-[70px] h-[60px] relative p-[10px]  overflow-hidden rounded-[10px] border">
              <div className="relative w-full h-full">
                <Image
                  src={each}
                  fill
                  alt=""
                  sizes=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
