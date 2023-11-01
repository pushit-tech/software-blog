"use client";
import React from "react";
import { IntlProvider } from "react-intl";
import { useLocale } from "@/locales/hooks/useLocale";

const App = ({ children }: { children: any }) => {
  const { currentLocale, translations } = useLocale();

  return (
    <IntlProvider locale={currentLocale} messages={translations}>
      {children}
    </IntlProvider>
  );
};

export default App;
