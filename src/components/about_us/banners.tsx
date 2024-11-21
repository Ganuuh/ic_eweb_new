import { CardWithBackground, ResponsiveContainer } from "../common";

export const Banners = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full grid md:grid-cols-2 gap-[20px] h-fit md:h-[320px]">
        <div className="w-full grid grid-cols-2 gap-[20px]">
          <div className="w-full md:h-full h-[160px]">
            <CardWithBackground
              image="/company/erhem_zorilgo.png"
              justify=""
              items=""
              innerText={<></>}
            />
          </div>
          <CardWithBackground
            image="/company/world.png"
            justify="justify-center"
            items="items-center"
            innerText={
              <p className="md:text-[24px] text-[13px] font-medium md:leading-[34px] leading-[19px] text-[#0C293A] text-center">
                Финтек шийдлээр дамжуулан нийт харилцагчдадаа шинэлэг
                бүтээгдэхүүн, үйлчилгээг үзүүлэх
              </p>
            }
          />
        </div>
        <div className="w-full h-[160px] md:h-full">
          <CardWithBackground
            image="/company/shatar.png"
            justify=""
            items=""
            innerText={
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#0C293A] md:text-[28px] md:leading-[34px] text-[14px] font-semibold leading-[15px]">
                  Алсын хараа
                </p>
                <p className="text-[#3D5461] text-[10px] md:text-[18px] md:leading-[24px] leading-[14px] max-w-[60%]">
                  Төв Азийн зах зээлд тэргүүлэгч бичил санхүүгийн байгууллага
                  болох.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </ResponsiveContainer>
  );
};
