import { OneSideContainer, RelativeImage } from "@/components/common";

export default function BusinessLoan() {
  const links = ["Нүүр", "Компани"];
  return (
    <div className="w-full flex flex-col items-center">
      {/* <OneSideContainer direction="left">
        <div className="w-full h-fit grid grid-cols-2">
          <div className="w-full flex flex-col">
            {links.map((each, index) => (
              <div
                key={each}
                className={`md:text-[16px] text-[12px] leading-[24px] flex gap-[2px] items-center`}
              >
                <p className="text-[16px]">{each}</p>
                {index < links.length - 1 ? (
                  <div className="w-[16px] h-[16px] relative">
                    <RelativeImage
                      src={
                        // textClassName === "text-white"
                        //   ? "/arrow_new.png" :
                        "/black_arrow.png"
                      }
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </OneSideContainer> */}
    </div>
  );
}
