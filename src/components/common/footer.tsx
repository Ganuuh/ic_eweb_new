import {
  AndroidFilled,
  AppleFilled,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  PhoneOutlined,
  PushpinFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { RelativeImage } from "./relative_image";
import { ResponsiveContainer } from "./responsive_container";

export const Footer = () => {
  return (
    <div className="w-full h-fit relative flex justify-center pt-[28px] pb-[40px]">
      <div className="absolute top-0 left-0 w-full md:h-[100px] h-[78px]">
        <div className="w-full h-full relative">
          <RelativeImage src="/images/common/footer_back.png" />
        </div>
      </div>
      <div className="z-10">
        <ResponsiveContainer>
          <div className="w-full flex flex-col gap-[20px]">
            <div className="w-full flex flex-col gap-[30px] pb-[20px] border-b">
              <div className="w-full flex justify-between items-center">
                <div className="w-[111px] h-[24px] relative">
                  <RelativeImage src="/invescore_logo.png" />
                </div>
                <div className="w-fit  flex gap-[12px]">
                  <FacebookFilled
                    style={{ color: "#243E4E", cursor: "pointer" }}
                  />
                  <InstagramFilled
                    style={{ color: "#243E4E", cursor: "pointer" }}
                  />
                  <LinkedinFilled
                    style={{ color: "#243E4E", cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="w-fit md:flex items-center gap-[40px] hidden">
                  <p className="text-[#243E4E] text-[16px] font-medium cursor-pointer">
                    Бодлого, журам
                  </p>
                  <p className="text-[#243E4E] text-[16px] font-medium cursor-pointer">
                    Түншлэл
                  </p>
                  <p className="text-[#243E4E] text-[16px] font-medium cursor-pointer">
                    Санал хүсэлт
                  </p>
                </div>
                <div className="w-fit flex flex-col md:flex-row md:items-center  items-start md:gap-[30px] gap-[20px]">
                  <div className="w-fit  flex  items-center gap-[8px]">
                    <QuestionCircleFilled style={{ color: "#243E4E" }} />
                    <p className="text-[#243E4E] text-[16px] font-medium cursor-pointer">
                      Тусламж
                    </p>
                  </div>
                  <div className="w-fit  flex items-center gap-[8px]">
                    <PhoneOutlined style={{ color: "#243E4E" }} />
                    <p className="text-[#243E4E] text-[16px] font-medium cursor-pointer">
                      77090077
                    </p>
                  </div>
                  <div className="w-fit  flex items-center gap-[8px]">
                    <PushpinFilled style={{ color: "#243E4E" }} />
                    <p className="text-[#243E4E] text-[16px] font-medium cursor-pointer">
                      Хаяг, байршил
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex md:hidden flex-col gap-[28px] items-center">
                <div className="w-full flex justify-between">
                  <p className="text-[#243E4E] text-[14px] font-medium cursor-pointer">
                    Бодлого, журам
                  </p>
                  <p className="text-[#243E4E] text-[14px] font-medium cursor-pointer">
                    Түншлэл
                  </p>
                  <p className="text-[#243E4E] text-[14px] font-medium cursor-pointer">
                    Санал хүсэлт
                  </p>
                </div>
                <div className="w-fit flex gap-[24px]">
                  <p className="text-[#0C293A] text-[14px] leading-[16px] cursor-pointer">
                    Үйлчилгээний нөхцөл
                  </p>
                  <div className="h-[100%] border-l-[1px]" />
                  <p className="text-[#0C293A] text-[14px] leading-[16px] cursor-pointer">
                    Нуудлалын бодлого
                  </p>
                </div>
              </div>
              <div className="w-full md:flex justify-between items-center hidden">
                <p className="text-[14px] leading-[18px] text-[#0C293A] font-semibold">
                  Инвескор банк аппликейшн татах
                </p>
                <div className="grid grid-cols-2 gap-[20px] p-[10px] rounded-[10px] bg-[#F5F7F8]">
                  <div className="w-full py-[6px] px-[14px] flex gap-[8px] bg-white rounded-[6px]">
                    <AppleFilled />
                    <div className="h-full w-fit flex flex-col justify-between">
                      <p className="text-[#0C293A] text-[9px] leading-[12px] font">
                        Download on the
                      </p>
                      <p className="text-[#06151D] text-[10px] leading-[12px] font-bold">
                        App Store
                      </p>
                    </div>
                  </div>
                  <div className="w-full py-[6px] px-[14px] flex gap-[8px] bg-white rounded-[6px]">
                    <AndroidFilled />
                    <div className="h-full w-fit flex flex-col justify-between">
                      <p className="text-[#0C293A] text-[9px] leading-[12px] font">
                        Get it on
                      </p>
                      <p className="text-[#06151D] text-[10px] leading-[12px] font-bold">
                        Google Play
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="w-fit md:flex items-center gap-[15px] hidden">
                <p className="text-[#0C293A] text-[15px] leading-[16px] cursor-pointer">
                  Үйлчилгээний нөхцөл
                </p>
                <div className="h-[100%] border-l-[1px]" />
                <p className="text-[#0C293A] text-[15px] leading-[16px] cursor-pointer">
                  Нуудлалын бодлого
                </p>
              </div>
              <p className="text-[#0C293A] text-[13px] leading-[16px] font-medium text-center">
                © Бүх эрх хуулиар хамгаалагдсан 2024. Invescore Financial Group.
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
