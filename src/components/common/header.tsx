import Image from "next/image";
import { ResponsiveContainer } from "./responsive_container";
import { Button } from "antd";
import Link from "next/link";
import { RelativeImage } from "./relative_image";
import { BurgerMenu } from "./burger_menu";

export const Header = () => {
  const routes = [
    { text: "Бүтээгдэхүүн", link: "/" },
    { text: "Хөрөнгө оруулагчид", link: "/" },
    { text: "Компани", link: "/company" },
    { text: "Хүний нөөц", link: "/" },
  ];
  return (
    <div className="w-full  bg-white flex justify-center h-[56px] items-center">
      <ResponsiveContainer>
        <div className="w-full flex justify-between items-center">
          <div className="w-[111px] h-[24px] relative">
            <Image
              fill
              sizes=""
              src={"/invescore_logo.png"}
              alt="Invescore logo"
            />
          </div>
          <div className="hidden  md:flex w-fit gap-[20px] text-[#0C293A]">
            {routes.map((each) => (
              <Link key={each.text} href={each.link}>
                <p className="text-[13px] leading-[14px] text-[##0C293A] font-semibold cursor-pointer">
                  {each.text}
                </p>
              </Link>
            ))}
          </div>
          <div className="hidden  md:flex items-center gap-[24px]">
            <div className="w-[20px] h-[20px] relative overflow-hidden rounded-full">
              <RelativeImage src="/flag.png" />
            </div>
            <Button className="w-[105px] h-[36px] flex justify-center items-center rounded-full bg-[#0C293A] text-white leading-[20px] text-[14px]">
              Нэвтрэх
            </Button>
          </div>
          <BurgerMenu />
        </div>
      </ResponsiveContainer>
    </div>
  );
};
