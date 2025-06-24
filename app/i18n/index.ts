import en from "./locales/en";
import zhHant from "./locales/zh-hant";
import zhHans from "./locales/zh-hans";

export const translations = {
  en,
  "zh-hant": zhHant,
  "zh-hans": zhHans,
} as const;

export type Language = keyof typeof translations;
