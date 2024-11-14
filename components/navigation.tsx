"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../styles/navigation.module.css";

export default function Naviation() {
  const path = usePathname();
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home {path === "/" && "🔥"}</Link>
        </li>
        <li>
          <Link href="/about-us">
            Navigation {path === "/about-us" && "🔥"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
