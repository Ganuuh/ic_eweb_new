import { Button } from "antd";
import { RelativeImage } from "./relative_image";
import { ResponsiveContainer } from "./responsive_container";
type BannerContainerProps = {
  image: string;
  responsive_image: string;
  links: string[];
  title: string;
  description?: string;
  textClassName?: string;
};

export const BannerContainer = (props: BannerContainerProps) => {
  const { links, title, description, image, responsive_image, textClassName } =
    props;
  return (
    <div className="w-full h-[420px] relative">
      <div className="w-full h-full relative hidden md:flex">
        <RelativeImage src={image} />
      </div>
      <div className="w-full h-full relative md:hidden">
        <RelativeImage src={responsive_image} />
      </div>
      <div className="w-full h-full flex items-center justify-center  absolute top-0 left-0">
        <ResponsiveContainer>
          <div className="w-full  flex flex-col md:items-center justify-between gap-[15px] md:gap-[8px] items-start">
            <div className="w-fit flex gap-[10px]">
              {links.map((each, index) => (
                <div
                  key={each}
                  className={`md:text-[16px] text-[12px] leading-[24px] flex gap-[2px] items-center ${textClassName}`}
                >
                  <p className="text-[16px]">{each}</p>
                  {index < links.length - 1 ? (
                    <div className="w-[16px] h-[16px] relative">
                      <RelativeImage
                        src={
                          textClassName === "text-white"
                            ? "/arrow_new.png"
                            : "/black_arrow.png"
                        }
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-[20px] text-white md:items-center">
              <p className="leading-[52px] md:text-[36px] text-[28px] font-bold">
                {title}
              </p>
              <p className="md:leading-[26px] leading-[24px] md:text-center md:text-[18px] text-[14px] w-[80%]">
                {description}
              </p>
            </div>
            <Button className="md:hidden border-none bg-[#051017] text-[14px] font-medium text-white rounded-full px-[15px] py-[10px] items-center">
              Дэлгэрэнгүй →
            </Button>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
