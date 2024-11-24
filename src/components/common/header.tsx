"use client";
import Image from "next/image";
import { ResponsiveContainer } from "./responsive_container";
import { Button } from "antd";
import { BurgerMenu } from "./burger_menu";
import { useEffect, useState } from "react";
import LocaleSwitcher from "./language_toggle";
import { useLang } from "../providers/language_provider";
import Link from "next/link";

export const Header = () => {
  const [logo, setLogo] = useState<number>(0);
  const [clicked, setClicked] = useState<null | number>(null);
  const { header, locale } = useLang();

  const { product, investment, company, human_resource } = header;

  // Extract all fields from product
  const {
    self: productSelf,
    car_buy,
    business_loan,
    business_loan_line,
    car_with_no_plate,
    investment_loan,
    credit_card,
    usage_loan,
    apart_loan,
    oron_suuts,
    leasing_loan,
    salary_loan,
    future_loan,
    fast_loan,
    apart_fast_loan,
    car_fast_loan,
    phone_loan,
    green_loan,
    business_green,
    usage_green,
    car_green,
    trust,
    basic,
    uyn,
  } = product;

  // Extract all fields from investment
  const {
    self: investmentSelf,
    huwitsaa,
    ipo,
    fpo,
    invest_pro,
    bond,
    hbvts,
    tailan,
    finance_tailan,
    uil_ajillagaa_tailan,
    stable_tailan,
    company_tailan,
  } = investment;

  // Extract all fields from company
  const {
    self: companySelf,
    about_us,
    company_struc,
    udirdlaga_bag,
    zasaglal,
    butets,
    ohin_com,
    risk,
    togtowortoi_hugjil,
    togtowortoi_hugjil_bodlogo,
    bon,
    projects,
    smb,
    alliance,
    stable_support,
  } = company;

  // Extract all fields from human_resource
  const {
    self: humanResourceSelf,
    welcome,
    works,
    choice,
    hangamj,
  } = human_resource;

  const groupItems = (items: any[]) => {
    const groups = [];
    let currentGroup: any[] = [];

    items.forEach((item) => {
      if (item.bold) {
        if (currentGroup.length > 0) {
          groups.push([...currentGroup]);
        }
        currentGroup = [item];
      } else {
        currentGroup.push(item);
      }
    });

    // Add the last group
    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    return groups;
  };
  const routes = [
    {
      text: productSelf,
      children: [
        { route: `/${locale}/`, text: car_buy, bold: true },
        { route: "", text: business_loan, bold: true },
        { route: "", text: business_loan_line },
        { route: "", text: car_with_no_plate },
        { route: "", text: investment_loan },
        { route: "", text: credit_card, bold: true },
        { route: "", text: usage_loan, bold: true },
        { route: "", text: apart_loan },
        { route: "", text: oron_suuts },
        { route: "", text: leasing_loan },
        { route: "", text: salary_loan },
        { route: "", text: future_loan },
        { route: "", text: fast_loan, bold: true },
        { route: "", text: apart_fast_loan },
        { route: "", text: car_fast_loan },
        { route: "", text: phone_loan },
        { route: "", text: green_loan, bold: true },
        { route: "", text: business_green },
        { route: "", text: usage_green },
        { route: "", text: car_green },
        { route: "", text: trust, bold: true },
        { route: "", text: basic },
        { route: "", text: uyn },
      ],
    },
    {
      text: investmentSelf,
      children: [
        { route: "", text: huwitsaa, bold: true },
        { route: "", text: ipo },
        { route: "", text: fpo },
        { route: "", text: invest_pro, bold: true },
        { route: "", text: huwitsaa },
        { route: "", text: bond },
        { route: "", text: hbvts },
        { route: "", text: tailan, bold: true },
        { route: "", text: finance_tailan },
        { route: "", text: uil_ajillagaa_tailan },
        { route: "", text: stable_tailan },
        { route: "", text: company_tailan },
      ],
    },
    {
      text: companySelf,
      children: [
        { route: "", text: about_us, bold: true },
        { route: "", text: company_struc, bold: true },
        { route: "", text: udirdlaga_bag },
        { route: "", text: zasaglal },
        { route: "", text: butets },
        { route: "", text: ohin_com },
        { route: "", text: risk, bold: true },
        { route: "", text: togtowortoi_hugjil, bold: true },
        { route: "", text: togtowortoi_hugjil_bodlogo },
        { route: "", text: bon },
        { route: "", text: projects, bold: true },
        { route: "", text: smb },
        { route: "", text: alliance },
        { route: "", text: stable_support },
      ],
    },
    {
      text: humanResourceSelf,
      children: [
        { route: "", text: welcome, bold: true },
        { route: "", text: works, bold: true },
        { route: "", text: choice, bold: true },
        { route: "", text: hangamj, bold: true },
      ],
    },
  ];

  useEffect(() => {
    setLogo(100);
  }, []);
  return (
    <div className="w-full  bg-white flex justify-center py-[14px] items-center relative">
      <ResponsiveContainer>
        <div className="w-full flex justify-between items-center">
          <div
            className="md:w-[140px] w-[130px] h-[28px] md:h-[30px] relative"
            style={{
              transform: `translateX${logo}px`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <Image
              fill
              sizes=""
              src={"/invescore_logo.png"}
              alt="Invescore logo"
            />
          </div>
          <div className="hidden  relative md:flex w-fit gap-[30px] text-[#0C293A]">
            {routes.map((each, index) => (
              <p
                key={each.text}
                style={clicked == index ? { backgroundColor: "#EDF1F2" } : {}}
                onMouseEnter={() => {
                  setClicked(index);
                }}
                // onMouseLeave={() => {
                //   setClicked(null);
                // }}
                className="text-[17px] leading-[19px] rounded-full duration-300 text-[##0C293A] font-medium cursor-pointer whitespace-nowrap px-[14px] py-[8px]"
              >
                {each.text}
              </p>
            ))}
          </div>
          <div className="hidden  md:flex items-center gap-[24px]">
            <LocaleSwitcher />
            <Button className="w-[105px] h-[36px] flex justify-center items-center rounded-full bg-[#0C293A] text-white leading-[27px] text-[18px]">
              Нэвтрэх
            </Button>
          </div>
          <BurgerMenu />
        </div>
      </ResponsiveContainer>
      <div
        style={{
          height: clicked == null ? 0 : "fit-content",
          paddingTop: clicked == null ? 0 : 28,
          paddingBottom: clicked == null ? 0 : 28,
          borderBottom: "1px solid #EDF1F2",
        }}
        onMouseLeave={() => {
          setClicked(null);
        }}
        className="hidden md:flex justify-center items-center w-[100vw]  bg-white absolute top-[100%] left-0 duration-300 z-20"
      >
        <div className="xl:w-[1360px] w-full px-[25px] xl:px-0 h-full">
          {clicked !== null && (
            <div className="grid grid-cols-4 gap-8  items-start w-full ">
              {groupItems(routes[clicked].children).map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col  gap-[5px] justify-center items-start "
                >
                  {group.map((item, itemIndex) => (
                    <Link key={itemIndex} href={item.route}>
                      <p
                        style={
                          item.bold ? { fontWeight: 600 } : { fontWeight: 400 }
                        }
                        className={`text-[14px] leading-[16px] text-[#0C293A] rounded-full py-[8px] px-[14px] ${
                          item.bold ? null : "hover:bg-[#EDF1F2]"
                        } duration-300`}
                      >
                        {item.text}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
