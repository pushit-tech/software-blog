"use client";

import Link from "next/link";
import React from "react";
import { PitLogo } from "@pit/ui/components/logo";
import LanguageSwicher from "@components/language-swicher";
import "./styles.scss";

function TopMenu() {
  return (
    <nav className="pit-main-header container-fluid">
      <ul className="pit-main-header__item">
        <li>
          <Link href="/" className="pit-main-header__logo">
            <PitLogo />
          </Link>
        </li>
      </ul>
      <ul className="pit-main-header__item">
        <li>
          <LanguageSwicher />
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
