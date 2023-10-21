import Link from "next/link";
import React from "react";
import { PitLogo } from "@/components/logo";

function TopMenu() {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <PitLogo></PitLogo>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="">language</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
