import React from "react";

export const ResponsiveContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="xl:w-[1040px] 2xl:w-[1360px] md:w-[1000px] w-full px-[25px] xl:px-0">
      {children}
    </div>
  );
};
