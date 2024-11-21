"use client";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleClick = () => {};

  return <div className="flex w-fit"></div>;
}
