import React from "react";

export const ResponsiveContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="xl:w-[1360px] w-full px-[25px] xl:px-0">{children}</div>
  );
};
