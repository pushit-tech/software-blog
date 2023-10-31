"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { Link } from "./link";

export const PitLink = createComponent({
  react: React,
  tagName: "pit-link",
  elementClass: Link,
});
