import { RelativeImage, ResponsiveContainer } from "../common";
import { EmojiEvents, Upgrade, VerifiedUser } from "@mui/icons-material";

export const BottomCard = () => {
  const data = [
    {
      text: "Чанарын удирдлага (ISO9001) болон Мэдээллийн аюулгүй байдлын (ISO27001).",
      image: <VerifiedUser />,
    },
    {
      text: "“MicroFinanza Rating” SRL байгууллагаас аваад байсан “A-“ үнэлгээгээ “A” болгож ахиуллаа.",
      image: <Upgrade />,
    },
    {
      text: "“2023 оны “Банк бус Санхүүгийн байгууллагын ЭНТРЕПРЕНЕР” шагналын эзэн”",
      image: <EmojiEvents />,
    },
  ];
  return (
    <ResponsiveContainer>
      <div className="w-full grid md:grid-cols-3 gap-[18px] md:gap-[1.88vw] pt-[8.33vw] ">
        {data.map((each) => (
          <div
            key={each.text}
            className="bg-[#F5F5F5] rounded-[20px] p-[24px] md:p-[1.88vw] md:rounded-[1.25vw] text-[16px] font-medium leading-[24px] md:text-[1.04vw] flex flex-col gap-[14px] md:gap-[0.83vw] text-[#0C293A] relative"
          >
            {/* <RelativeImage src="" /> */}
            {each.image}
            <p className="md:leading-[1.67vw]">{each.text}</p>
          </div>
        ))}
      </div>
    </ResponsiveContainer>
  );
};
