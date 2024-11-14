import { CardWithBackground, ResponsiveContainer } from "../common";

export const PreciousThings = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full flex flex-col gap-[32px] items-center justify-center">
        <div className="flex flex-col gap-[16px] items-center justify-center">
          <p className="text-[#0C293A] text-[24px] font-semibold">Үнэт зүйл</p>
          <p className="text-[#243E4E] leading-[20px] text-[14px] text-center w-[80%]">
            At Invescore, we take Responsibility for our actions, foster
            Collaboration through teamwork, embrace Challenges to drive
            innovation, and prioritize Speed for efficient, timely solutions.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-[20px]">
          <div className="w-full h-[480px] relative">
            <CardWithBackground
              image="/company/hariutslaga.png"
              justify="justify-start"
              items="items-start"
              pt={60}
              pl={28}
              innerText={
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#0C293A] text-[20px] font-semibold leading-[24px]">
                    Хариуцлага
                  </p>
                  <p className="text-[#3D5461] text-[16px] leading-[20px] ">
                    Хийсэн ажилдаа эзэн болж, бусдын өмнө хариуцлагаа
                    ухамсарлан, ёс зүйтэй, зарчимч, шударгаар ажиллахыг зорьдог.
                  </p>
                </div>
              }
            />
          </div>
          <div className="w-full h-full grid grid-cols-2 gap-[20px]">
            <div className="w-full h-full grid grid-rows-2 gap-[20px]">
              <CardWithBackground
                image="/company/haiguul.png"
                justify="justify-center"
                items="items-center"
                pt={0}
                pl={0}
                innerText={
                  <p className="text-[#0C293A] text-[20px] font-semibold leading-[24px]">
                    Хайгуул
                  </p>
                }
              />
              <CardWithBackground
                image="/company/hamtiin_ajillagaa.png"
                justify="justify-center"
                items="items-end"
                pt={24}
                pl={16}
                innerText={
                  <p className="text-white text-[20px] font-semibold leading-[24px]">
                    Хамтын ажиллагаа
                  </p>
                }
              />
            </div>
            <div className="w-full h-full">
              <CardWithBackground
                image="/company/hurd.png"
                justify="justify-center"
                items="items-end"
                pt={24}
                pl={16}
                innerText={
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[#0C293A] text-[20px] font-semibold leading-[24px]">
                      Хурд
                    </p>
                    <p className="text-[#3D5461] text-[16px] leading-[20px] ">
                      Хором тутамд өөрчлөгдөж буй бизнес орчин, технологийн
                      хувьсгал, санхүүгийн салбарын өрсөлдөөний дунд бидний өдөр
                      тутмын үйл ажиллагаа маань хурдтай ажиллахыг шаарддаг.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
};
