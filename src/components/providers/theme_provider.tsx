import { ConfigProvider } from "antd";
import React from "react";
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryBorder: "#0C293A",
          colorPrimary: "#0C293A",
          colorIcon: "#243E4E",
        },
        components: {
          Menu: {
            iconSize: 20,
            subMenuItemBg: "white",
            fontSize: 14,
            fontWeightStrong: 700,
            activeBarBorderWidth: 3,
            itemSelectedBg: "#687fa3",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
