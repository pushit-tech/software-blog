"use client";

import React from "react";
import { FormattedMessage } from "react-intl";

const LanguageSwicher = () => {
  return (
    <select data-size="sm">
      <option value="en">
        <FormattedMessage
          description="English text to change language"
          defaultMessage="Englis"
          id="2WMlTH"
        />
      </option>
      <option value="es">
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
