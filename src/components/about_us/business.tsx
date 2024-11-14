import { RelativeImage, ResponsiveContainer } from "../common";

export const Business = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col gap-[32px] items-center">
        <p className="text-[#0C293A] text-[24px] font-semibold">
          Бизнесийн зарчим
        </p>
        <div className="w-full h-[240px] relative">
          <RelativeImage src="/company/business.png" />
        </div>
      </div>
    </ResponsiveContainer>
  );
};
