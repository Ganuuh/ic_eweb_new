import { BannerContainer } from "@/components/common";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-fit">
      {/* <BannerContainer /> */}
      {children}
    </div>
  );
}
