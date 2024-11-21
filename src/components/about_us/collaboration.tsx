import { ResponsiveContainer } from "../common";
import { RollingCarousel } from "./rolling_carousel";

export const Collaboration = () => {
  const images1 = [
    "/images/logos/1.png",
    "/images/logos/2.png",
    "/images/logos/4.svg",
    "/images/logos/5.png",
    "/images/logos/6.png",
    "/images/logos/7.png",
    "/images/logos/9.jpg",
    "/images/logos/10.png",
    "/images/logos/11.png",
    "/images/logos/12.png",
    "/images/logos/13.png",
    "/images/logos/14.png",
    "/images/logos/15.png",
    "/images/logos/16.png",
  ];

  const images2 = [
    "/images/logos/17.svg",
    "/images/logos/18.png",
    "/images/logos/19.png",
    "/images/logos/20.png",
    "/images/logos/21.png",
    "/images/logos/22.png",
    "/images/logos/23.png",
    "/images/logos/24.png",
    "/images/logos/25.svg",
    "/images/logos/26.png",
    "/images/logos/27.png",
    "/images/logos/28.svg",
    "/images/logos/29.png",
    "/images/logos/30.png",
  ];

  const images3 = [
    "/images/logos/31.png",
    "/images/logos/32.png",
    "/images/logos/33.png",
    "/images/logos/34.png",
    "/images/logos/35.png",
    "/images/logos/36.png",
    "/images/logos/37.png",
    "/images/logos/38.png",
    "/images/logos/39.png",
    "/images/logos/40.png",
    "/images/logos/41.png",
    "/images/logos/42.png",
    "/images/logos/43.png",
    "/images/logos/44.png",
  ];
  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col gap-[32px] items-center">
        <p className="text-[#0C293A] text-[24px] md:text-[36px] md:leading-[43px] leading-[30px] font-semibold">
          Хамтрагч байгууллагууд
        </p>
        <div className="w-full h-fit grid grid-rows-3 gap-[10px]">
          <RollingCarousel
            responsiveSlidePerView={2}
            slidesPerview={6}
            images={images1}
            position="right"
          />
          <RollingCarousel
            responsiveSlidePerView={3}
            slidesPerview={5}
            images={images2}
            position="left"
          />
          <RollingCarousel
            responsiveSlidePerView={2}
            slidesPerview={6}
            className="flex md:hidden"
            images={images3}
            position="right"
          />
        </div>
      </div>
    </ResponsiveContainer>
  );
};
