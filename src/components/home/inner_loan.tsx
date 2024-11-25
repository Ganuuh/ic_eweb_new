import { InnerLoanCard } from "./inner_loan_card";

export const InnerLoan = () => {
  const loans = [
    {
      id: 1,
      title: "Цалингийн зээл",
      description: "2.9% • 24 сар хүртэл",
      image: "/home/salary_loan.png",
    },
    {
      id: 2,
      title: "Итгэлтэй ирээдүй зээл",
      description: "2.9% • 24 сар хүртэл",
      image: "/home/future_loan.png",
    },
    {
      id: 3,
      title: "Хэрэглээний зээл",
      description: "2.9% • 24 сар хүртэл",
      image: "/home/usage_loan.png",
    },
    {
      id: 4,
      title: "Шуурхай зээл",
      description: "2.9% • 24 сар хүртэл",
      image: "/home/salary_loan.png",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-[1.67vw]">
      <div className="w-full flex h-fit flex-col items-start gap-[1.04vw]">
        <p className="text-[#0C293A] text-[1.67vw] font-bold">Зээл</p>
        <div className="w-full gap-[10px] flex">
          <p className="rounded-[0.83vw] bg-white font-medium py-[0.68vw] px-[1.34vw] text-[#0C293A]">
            Бүтээгдэхүүн
          </p>
          <div className="w-full grid grid-cols-3 gap-[1.25vw]  items-center">
            <div className="w-full h-[6px] rounded-full bg-[#D9D9D9]"></div>
            <div className="w-full h-[6px] rounded-full bg-[#D9D9D9]"></div>
            <div className="w-full h-[6px] rounded-full bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-[0.73vw]">
        {loans.map((each, index) => (
          <InnerLoanCard key={index} {...each} />
        ))}
      </div>
    </div>
  );
};
