"use client";

import React, { ChangeEvent } from "react";
import { FormattedMessage } from "react-intl";

const LanguageSwicher = () => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
  };

  return (
    <select data-size="sm" onChange={handleChange}>
      <option value="en">
        <FormattedMessage
          description="English text to change language"
          defaultMessage="Englis"
          id="2WMlTH"
        />
      </option>
      <option value="us">
        <FormattedMessage
          description="Spanish text to change language"
          id="7ZhQJE"
          defaultMessage="Spanish"
        />
      </option>
    </select>
  );
};

export default LanguageSwicher;
