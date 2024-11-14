import { RelativeImage } from "./relative_image";
import { ResponsiveContainer } from "./responsive_container";
type BannerContainerProps = {
  image: string;
  responsive_image: string;
  links: string[];
  title: string;
  description?: string;
};

export const BannerContainer = (props: BannerContainerProps) => {
  const { links, title, description, image, responsive_image } = props;
  return (
    <div className="w-full h-[320px] relative">
      <div className="w-full h-full relative hidden">
        <RelativeImage src={image} />
      </div>
      <div className="w-full h-full relative md:hidden">
        <RelativeImage src={responsive_image} />
      </div>
      <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
        <ResponsiveContainer>
          <div className="w-full flex flex-col items-center gap-[8px]">
            <div className="w-fit flex gap-[8px]">
              {links.map((each, index) => (
                <div
                  key={each}
                  className="text-white text-[12px] flex gap-[2px] items-center"
                >
                  <p className="text-[12px]">{each}</p>
                  {index < links.length - 1 ? (
                    <div className="w-[16px] h-[16px] relative">
                      <RelativeImage src="/arrow_new.png" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-[16px] text-white items-center">
              <p className="leading-[40px] text-[28px] font-bold">{title}</p>
              <p className="leading-[20px] text-center text-[14px] w-[80%]">
                {description}
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
