import React from "react";
import Image from "next/image";
import { PitAvatar } from "@/components/avatar";
import { type ComponentSize, COMPONENT_SIZES } from "@/components/types";

interface Params {
  src: string;
  alt: string;
  size: ComponentSize;
}

const avatarSizes: { [key in COMPONENT_SIZES]: number[] } = {
  [COMPONENT_SIZES.xs]: [25, 25],
};

const WIDTH = 0;
const HEIGHT = 1;

export function NxtAvatar({ src, alt, size }: Params) {
  function width(): number {
    return avatarSizes[size][WIDTH];
  }

  function height(): number {
    return avatarSizes[size][HEIGHT];
  }

  return (
    <PitAvatar size={size}>
      <Image src={src} width={width()} height={height()} alt={alt} />
    </PitAvatar>
  );
}
