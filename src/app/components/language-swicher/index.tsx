"use client";

import React from "react";
import { FormattedMessage } from "react-intl";

const LanguageSwicher = () => {
  return (
    <select data-size="sm">
      <option value="en">
        <FormattedMessage id="english" defaultMessage="Englis" />
      </option>
      <option value="es">
        <FormattedMessage id="spanish" defaultMessage="Spanish" />
      </option>
    </select>
  );
};

export default LanguageSwicher;
