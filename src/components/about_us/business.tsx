import { RelativeImage, ResponsiveContainer } from "../common";

export const Business = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col gap-[32px] items-center">
        <p className="text-[#0C293A] md:text-[36px] text-[24px] font-semibold md:leading-[43px] leading-[33px]">
          Бизнесийн зарчим
        </p>
        <div className="hidden md:flex w-full h-[320px] relative">
          <RelativeImage src="/company/business.png" />
        </div>
        <div className="w-full md:hidden h-[180px] relative">
          <RelativeImage src="/company/res_business.png" />
        </div>
      </div>
    </ResponsiveContainer>
  );
};
