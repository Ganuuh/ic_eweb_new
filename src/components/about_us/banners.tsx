import { CardWithBackground, ResponsiveContainer } from "../common";

export const Banners = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full grid grid-cols-2 gap-[20px] h-[240px]">
        <div className="w-full grid grid-cols-2 gap-[20px]">
          <CardWithBackground
            image="/company/erhem_zorilgo.png"
            justify=""
            items=""
            innerText={<></>}
          />
          <CardWithBackground
            image="/company/world.png"
            justify="justify-center"
            items="items-center"
            innerText={
              <p className="text-[18px] font-medium leading-[28px] text-[#0C293A] text-center">
                Финтек шийдлээр дамжуулан нийт харилцагчдадаа шинэлэг
                бүтээгдэхүүн, үйлчилгээг үзүүлэх
              </p>
            }
          />
        </div>
        <CardWithBackground
          image="/company/shatar.png"
          justify=""
          items=""
          innerText={
            <div className="flex flex-col gap-[10px]">
              <p className="text-[#0C293A] text-[20px] font-semibold leading-[24px]">
                Алсын хараа
              </p>
              <p className="text-[#3D5461] text-[16px] leading-[20px] max-w-[60%]">
                Төв Азийн зах зээлд тэргүүлэгч бичил санхүүгийн байгууллага
                болох.
              </p>
            </div>
          }
        />
      </div>
    </ResponsiveContainer>
  );
};
