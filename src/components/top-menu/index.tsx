import Link from "next/link";
import React from "react";
import "@/components/logo";

function TopMenu() {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <psh-logo></psh-logo>
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
