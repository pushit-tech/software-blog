//reference from https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/components/social-icons/index.tsx
import {
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
} from "./social-icons";
import { PitLink } from "@pit/ui/components/link";
const components = {
  facebook: Facebook,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
};

type SocialIconProps = {
  type: keyof typeof components;
  href: string | undefined;
  size?: number;
};

const SocialIcon = ({ type, href, size = 8 }: SocialIconProps) => {
  const SocialSvg = components[type];

  return (
    <a href={href}>
      <span data-hidden>{type}</span>
      <SocialSvg width={24} height={24} />
    </a>
  );
};

export default SocialIcon;
