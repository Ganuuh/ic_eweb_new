import { RelativeImage, ResponsiveContainer } from "../common";

export const Collaboration = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col gap-[32px] items-center">
        <p className="text-[#0C293A] text-[24px] font-semibold">
          Бизнесийн зарчим
        </p>
        <div className="w-full h-[180px] relative">
          <RelativeImage src="/company/collab.png" />
        </div>
      </div>
    </ResponsiveContainer>
  );
};
