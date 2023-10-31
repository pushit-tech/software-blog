"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { Avatar } from "./avatar";

export const PitAvatar = createComponent({
  react: React,
  tagName: "pit-avatar",
  elementClass: Avatar,
});
