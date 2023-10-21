"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { Logo } from "./logo";

export const PitLogo = createComponent({
  react: React,
  tagName: "pit-logo",
  elementClass: Logo,
});
