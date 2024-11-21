import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "../../lib/dictionary";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return <div>{dict.header.product.car_buy}</div>;
}
