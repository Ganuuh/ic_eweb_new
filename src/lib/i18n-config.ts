export const i18n = {
  defaultLocale: "en",
  locales: ["en", "mn"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
