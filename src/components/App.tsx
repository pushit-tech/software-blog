"use client";

import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { getLocalesDictionary } from "@/locales/model";

type Params = {
  children: any;
  params: { lang: string };
};

const App = ({ children, params }: Params) => {
  const { lang } = params;

  const [messages, setMessage] = useState({});

  async function fetchLocales() {
    const locales = await getLocalesDictionary(lang);
    setMessage(locales);
  }

  useEffect(() => {
    fetchLocales();
  }, []);

  return (
    <IntlProvider locale={lang} messages={messages}>
      <h1>{lang}</h1>
      {children}
    </IntlProvider>
  );
};

export default App;
