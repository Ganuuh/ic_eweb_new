"use client";
import { ProductOutlined } from "@ant-design/icons";
import {
  AccountBalanceWalletOutlined,
  BusinessOutlined,
  CategoryOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { Drawer, Menu, MenuProps } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
type MenuItem = Required<MenuProps>["items"][number];

export const BurgerMenu = () => {
  const [drawer, setDrawer] = useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const fullPath =
    searchParams.size !== 0 ? `${pathname}?${searchParams}` : pathname;
  const routerHandler = (link: string) => {
    router.push(link);
  };
  const menuItem: MenuItem[] = [
    {
      key: "products",
      label: "Бүтээгдэхүүн",
      icon: <ProductOutlined />,

      //   children: [
      //     {
      //       key: "/product?inview=apart",
      //       label: "Орон сууц",
      //       icon: <BusinessTwoTone />,
      //       onClick: () => {
      //         routerHandler("/product?inview=apart");
      //       },
      //     },
      //     {
      //       key: "/product?inview=office",
      //       label: "Оффис",
      //       icon: <CoffeeOutlined />,
      //       onClick: () => {
      //         routerHandler("/product?inview=office");
      //       },
      //     },
      //     {
      //       key: "/product?inview=car",
      //       label: "Автомашин",
      //       icon: <CarOutlined />,
      //       onClick: () => {
      //         routerHandler("/product?inview=car");
      //       },
      //     },
      //     {
      //       key: "/product?inview=tool",
      //       label: "Тоног төхөөрөмж",
      //       icon: <ToolOutlined />,
      //       onClick: () => {
      //         routerHandler("/product?inview=tool");
      //       },
      //     },
      //   ],
    },
    {
      key: "/investors",

      icon: <AccountBalanceWalletOutlined fontSize="inherit" color="inherit" />,
      label: "Хөрөнгө оруулагчид",
      onClick: () => {
        routerHandler("/");
      },
    },
    {
      key: "/company",
      icon: <BusinessOutlined fontSize="inherit" color="inherit" />,
      label: "Компани",
      onClick: () => {
        routerHandler("/company");
      },
    },
    {
      key: "/human-resource",
      icon: <PeopleAltOutlined fontSize="inherit" color="inherit" />,
      label: "Хүний нөөц",
      onClick: () => {
        routerHandler("/");
      },
    },
  ];

  return (
    <div
      className="w-[22px] md:hidden flex flex-col gap-[5px]"
      onClick={() => {
        setDrawer(true);
      }}
    >
      {["", "", ""].map((_, index) => (
        <div
          key={index}
          className="w-full border border-[#0C293A] rounded-full"
        />
      ))}
      <Drawer
        open={drawer}
        closable
        placement="right"
        destroyOnClose
        className="h-[100vh]"
        width={340}
        onClose={() => {
          setDrawer(false);
        }}
      >
        <Menu
          items={menuItem}
          selectable
          selectedKeys={[fullPath]}
          defaultSelectedKeys={[fullPath]}
        />
      </Drawer>
    </div>
  );
};
