"use client";
import React, { useEffect, useMemo } from "react";
import { IntlProvider } from "react-intl";

import English from "@content/locales/en.json";
import Spanish from "@content/locales/es.json";

const App = (props) => {
  const locale = navigator.language; //|| useRouter()?.locale;

  const [currentLocale] = locale.split("-");

  const translationsForUsersLocale = useMemo(() => {
    switch (currentLocale) {
      case "en":
        return English;
      case "es":
        return Spanish;
      default:
        return Spanish;
    }
  }, [currentLocale]);

  return (
    <IntlProvider locale={currentLocale} messages={translationsForUsersLocale}>
      {props.children}
    </IntlProvider>
  );
};

export default App;
