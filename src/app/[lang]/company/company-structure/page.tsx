import { BannerContainer, RelativeImage } from "@/components/common";

export default function CompanyStructure() {
  return (
    <div className="w-full h-fit pb-[80px] pt-[40px] gap-[40px] flex flex-col items-center">
      <BannerContainer
        image={"/company/structure_banner.png"}
        responsive_image={"/company/structure_banner.png"}
        links={["Нүүр", "Компани", "Байгууллагын бүтэц"]}
        title={""}
        textClassName="text-[#0C293A]"
      />
      <div className="w-[760px] flex flex-col items-center gap-[40px] bg-red-400">
        <div className="w-full flex gap-[40px] items-center">
          <div className="w-[180px] h-[180px] relative rounded-full overflow-hidden cursor-zoom-in">
            <RelativeImage src="/images/directors/baysgalan_home.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
