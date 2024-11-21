import { useLang } from "../providers/language_provider";

export const HeaderMiddle = () => {
  const { header } = useLang();

  const { product, investment, company, human_resource } = header;

  // Extract all fields from product
  const {
    self: productSelf,
    car_buy,
    business_loan,
    business_loan_line,
    car_with_no_plate,
    investment_loan,
    credit_card,
    usage_loan,
    apart_loan,
    oron_suuts,
    leasing_loan,
    salary_loan,
    future_loan,
    fast_loan,
    apart_fast_loan,
    car_fast_loan,
    phone_loan,
    green_loan,
    business_green,
    usage_green,
    car_green,
    trust,
    basic,
    uyn,
  } = product;

  // Extract all fields from investment
  const {
    self: investmentSelf,
    huwitsaa,
    ipo,
    fpo,
    invest_pro,
    bond,
    hbvts,
    tailan,
    finance_tailan,
    uil_ajillagaa_tailan,
    stable_tailan,
    company_tailan,
  } = investment;

  // Extract all fields from company
  const {
    self: companySelf,
    about_us,
    company_struc,
    udirdlaga_bag,
    zasaglal,
    butets,
    ohin_com,
    risk,
    togtowortoi_hugjil,
    togtowortoi_hugjil_bodlogo,
    bon,
    projects,
    smb,
    alliance,
    stable_support,
  } = company;

  // Extract all fields from human_resource
  const {
    self: humanResourceSelf,
    welcome,
    works,
    choice,
    hangamj,
  } = human_resource;
  const routes = [
    {
      text: productSelf,
      children: [
        { route: "", text: car_buy, bold: true },
        { route: "", text: business_loan, bold: true },
        { route: "", text: business_loan_line },
        { route: "", text: car_with_no_plate },
        { route: "", text: investment_loan },
        { route: "", text: credit_card, bold: true },
        { route: "", text: usage_loan, bold: true },
        { route: "", text: apart_loan },
        { route: "", text: oron_suuts },
        { route: "", text: leasing_loan },
        { route: "", text: salary_loan },
        { route: "", text: future_loan },
        { route: "", text: fast_loan, bold: true },
        { route: "", text: apart_fast_loan },
        { route: "", text: car_fast_loan },
        { route: "", text: phone_loan },
        { route: "", text: green_loan, bold: true },
        { route: "", text: business_green },
        { route: "", text: usage_green },
        { route: "", text: car_green },
        { route: "", text: trust, bold: true },
        { route: "", text: basic },
        { route: "", text: uyn },
      ],
    },
    {
      text: investmentSelf,
      children: [
        { route: "", text: huwitsaa, bold: true },
        { route: "", text: ipo },
        { route: "", text: fpo },
        { route: "", text: invest_pro, bold: true },
        { route: "", text: huwitsaa },
        { route: "", text: bond },
        { route: "", text: hbvts },
        { route: "", text: tailan, bold: true },
        { route: "", text: finance_tailan },
        { route: "", text: uil_ajillagaa_tailan },
        { route: "", text: stable_tailan },
        { route: "", text: company_tailan },
      ],
    },
    {
      text: companySelf,
      children: [
        { route: "", text: about_us, bold: true },
        { route: "", text: company_struc, bold: true },
        { route: "", text: udirdlaga_bag },
        { route: "", text: zasaglal },
        { route: "", text: butets },
        { route: "", text: ohin_com },
        { route: "", text: risk, bold: true },
        { route: "", text: togtowortoi_hugjil, bold: true },
        { route: "", text: togtowortoi_hugjil_bodlogo },
        { route: "", text: bon },
        { route: "", text: projects, bold: true },
        { route: "", text: smb },
        { route: "", text: alliance },
        { route: "", text: stable_support },
      ],
    },
    {
      text: humanResourceSelf,
      children: [
        { route: "", text: welcome, bold: true },
        { route: "", text: works, bold: true },
        { route: "", text: choice, bold: true },
        { route: "", text: hangamj, bold: true },
      ],
    },
  ];

  const handleClick = () => {};
  return (
    <div className="hidden  relative md:flex w-fit gap-[30px] text-[#0C293A]">
      {routes.map((each) => (
        <p
          key={each.text}
          onClick={() => {}}
          className="text-[17px] leading-[19px] text-[##0C293A] font-medium cursor-pointer whitespace-nowrap"
        >
          {each.text}
        </p>
      ))}
      {/* <div className="w-[100vw] h-[200px] absolute top-[100%] left-0 bg-slate-500 z-10">
        {/* <Drawer open placement="top"></Drawer> */}
      {/* </div> */}
    </div>
  );
};
