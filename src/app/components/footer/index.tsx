"use client";

import React from "react";
import Link from "next/link";
import SocialIcon from "../social-icons";
import { FormattedMessage } from "react-intl";

import "./styles.scss";

function Footer() {
  return (
    <footer className="pit-main-footer">
      <div className="pit-main-footer__container">
        <div className="pit-main-footer__icons">
          <SocialIcon type="github" href="#" />
          <SocialIcon type="linkedin" href="#" />
          <SocialIcon type="youtube" href="#" />
          <SocialIcon type="facebook" href="#" />
          <SocialIcon type="twitter" href="#" />
          <SocialIcon type="instagram" href="#" />
        </div>
        <div className="pit-main-footer__data">
          <div>Pushit</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">
            <FormattedMessage
              id="personal_blog"
              defaultMessage="Personal blog"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
