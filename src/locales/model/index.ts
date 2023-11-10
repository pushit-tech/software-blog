export const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
};

export type Locales = (typeof LANGUAGES)[keyof typeof LANGUAGES];

const dictionaries = {
  [LANGUAGES.ENGLISH]: () =>
    import("@/locales/compiled-langs/en.json").then((module) => module.default),
  [LANGUAGES.SPANISH]: () =>
    import("@/locales/compiled-langs/es.json").then((module) => module.default),
};

export const getLocalesDictionary = async (locale: Locales) => {
  const lang = convertLocaleToISO(locale);
  return dictionaries[lang]();
};

export const convertLocaleToISO = (lang: Locales) =>
  lang === LANGUAGES.ENGLISH ? "en" : "es";
