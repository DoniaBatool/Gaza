"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BiBroadcast, BiMenu, BiX } from "react-icons/bi"; // Import live, menu, and close icons
import styles from "./header.module.css"; // Import your CSS module

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href="/">
            <Image src="/gaza/gaza.jpg" alt="Logo" width={60} height={60} className={styles.img} />
          </Link>
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/gazaMap">GazaMaps</Link>
          </li>
        </ul>

        {/* Live Button */}
        <div className={styles.live}>
          <Link href="https://www.aljazeera.com/live" target="_blank" rel="noopener noreferrer">
            <BiBroadcast size={24} />
            <span>Live</span>
          </Link>
        </div>

        {/* Hamburger menu icon */}
        <BiMenu className={styles.menuIcon} onClick={toggleSidebar} />
      </nav>

      {/* Sidebar for small screens */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <BiX className={styles.closeBtn} onClick={toggleSidebar} />
        <ul>
          <li>
            <Link href="/" onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleSidebar}>About</Link>
          </li>
          <li>
            <Link href="/gallery" onClick={toggleSidebar}>Gallery</Link>
          </li>
          <li>
            <Link href="/gazaMap" onClick={toggleSidebar}>GazaMaps</Link>
          </li>
          {/* Live button in sidebar */}
          <li>
            <Link href="https://www.aljazeera.com/live" target="_blank" rel="noopener noreferrer" onClick={toggleSidebar}>
              <BiBroadcast size={24} />
              <span>Live</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
