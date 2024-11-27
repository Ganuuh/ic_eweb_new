import { ApartmentOutlined, Person } from "@mui/icons-material";

export const InnerTrust = () => {
  return (
    <div className="w-full h-full flex flex-col gap-[1.67vw]">
      <div className="w-full flex h-fit flex-col items-start gap-[1.04vw]">
        <p className="text-[#0C293A] text-[14px] md:text-[1.67vw] font-bold">
          Итгэлцэл
        </p>
        <div className="w-full gap-[10px] flex">
          <p className="rounded-[0.83vw] bg-white  text-[8px] font-medium py-[0.68vw] px-[1.34vw] text-[#0C293A] flex gap-[5px] items-center">
            <Person fontSize="inherit" color="inherit" />
            Хувь хүн
          </p>
          <p className="rounded-[0.83vw] bg-white  text-[8px] font-medium py-[0.68vw] px-[1.34vw] text-[#0C293A] flex gap-[5px] items-center">
            <ApartmentOutlined fontSize="inherit" color="inherit" />
            Байгууллага
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-[0.73vw] bg-white h-full rounded-[0.83vw] overflow-hidden"></div>
    </div>
  );
};
