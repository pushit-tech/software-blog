import English from "@/locales/compiled-langs/en.json";
import Spanish from "@/locales/compiled-langs/es.json";

export type Locale = {
  currentLocale: string;
  translations: Record<string, any>;
};

const locale = "es";
const currentLocale = locale?.split("-")[0] || "en";

export function useLocale(): Locale {
  return {
    currentLocale: locale,
    translations: getMessages(),
  };
}

const getMessages = () => {
  switch (currentLocale) {
    case "en":
      return English;
    default:
      return Spanish;
  }
};
