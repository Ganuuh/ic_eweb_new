import type { Locale } from "./i18n-config";
import { cache } from "react";

const importJson = cache(async (locale: string): Promise<any> => {
  try {
    const modules = await Promise.all([
      import(`../dictionaries/${locale}/header.json`),

      // Add more imports as needed
    ]);

    return {
      header: modules[0].default,
    };
  } catch (error) {
    console.error(`Failed to load dictionaries for ${locale}:`, error);
    return {}; // Return empty object as fallback
  }
});

export const getDictionary = async (locale: Locale): Promise<any> =>
  importJson(locale);
