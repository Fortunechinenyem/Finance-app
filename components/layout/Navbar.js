import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import { Logo } from "@/public/images";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image className="" src={Logo} alt="logo" width={110} priority />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/expense">Expenses</Link>
        </li>
        <li>
          <Link href="/income">Income</Link>
        </li>
        <li>
          <Link href="/budget">Budget</Link>
        </li>
        <li>
          <Link href="/report">Reports</Link>
        </li>
      </ul>
    </nav>
  );
}
