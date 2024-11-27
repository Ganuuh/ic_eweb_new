import { Fragment } from "react";
import { ResponsiveContainer } from "../common";
import { NewsCard } from "./news_card";

export const HomeNews = () => {
  const news = [
    {
      title:
        '"InvesCore ABS" Хөрөнгөөр Баталгаажсан Үнэт Цаасны Анхдагч Зах Зээлийн Арилжаа Эхэллээ',
      date: "2024-08-26 12:00:00",
      image: "https://via.placeholder.com/300x200.png?text=ABS",
      description: "Анхдагч арилжаа эхэллээ.",
    },
    {
      title:
        "Олон Улсын EMF Microfinance Fund, AgmvK (EMF)-аас Авсан Нийт Санхүүжилтийн Хэмжээ 10 Сая Ам. Доллар Болгож Нэмэгдүүллээ",
      date: "2024-07-01 11:00:00",
      image: "https://via.placeholder.com/300x200.png?text=EMF",
      description: "Олон улсын EMF-ээс санхүүжилтийн хэмжээ нэмэгдлээ.",
    },
    {
      title:
        '"Инвескор ББСБ" ХХ нь Олон Улсын "MicroFinanza Rating" SRL Байгууллагаас Авсан “А” Үнэлгээгээ Ахин Амжилттай Баталгаажууллаа',
      date: "2024-06-17 11:00:00",
      image: "https://via.placeholder.com/300x200.png?text=MicroFinanza",
      description: "А үнэлгээ дахин баталгаажлаа.",
    },
  ];
  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col md:gap-[1.66vw] gap-[32px]">
        <div className="w-full flex justify-between">
          <p className="text-[#0C293A] text-[18px] md:text-[1.46vw] font-semibold">
            Мэдээ, мэдээлэл
          </p>
          <p className="md:text-[1.04vw] text-[#0C293A] font-medium text-[12px]">
            Бүгдийг үзэх
          </p>
        </div>
        <div className="w-full overflow-auto  gap-[2.5vw]">
          <div className="w-fit  gap-[20px] md:w-full flex md:grid md:grid-cols-3">
            {news.map((each, index) => (
              <NewsCard key={index} {...each} />
            ))}
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
};
