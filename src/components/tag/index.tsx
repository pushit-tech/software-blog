"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { Tag } from "./tag";

export const PitTag = createComponent({
  react: React,
  tagName: "pit-tag",
  elementClass: Tag,
});
