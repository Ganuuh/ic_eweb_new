import { Button } from "antd";
import { RelativeImage } from "../common";
import Link from "next/link";

export const ProductCard = ({
  title,
  text,
  path,
}: {
  title: string;
  text: string;
  path: string;
}) => {
  return (
    <div className="w-full flex flex-col py-[1.35vw] px-[1.04vw] rounded-[0.83vw] justify-between gap-[10px] h-full border">
      <div className="w-full flex flex-col gap-[0.83vw]">
        <div className="w-fit gap-[10px] flex items-center">
          <div className="h-[2.5vw] aspect-square rounded-[0.57vw] bg-[#F9F9F9] p-[0.52vw]">
            <div className="w-full h-full relative">
              <RelativeImage src="/swoosh.png" />
            </div>
          </div>
          <p className="text-[#0C293A] font-medium text-[0.94vw]">{title}</p>
        </div>
        <p className="text-[#3D5461] text-[0.84vw] font-medium">{text}</p>
      </div>
      <Link href={path}>
        <Button className="group text-white flex items-center md:text-[0.73vw] rounded-full bg-[#0C293A] px-[20px] py-[8px] md:px-[1.67vw] md:py-[0.52vw] text-[12px] leading-[14px]">
          Дэлгэрэнгүй
        </Button>
      </Link>
    </div>
  );
};
