"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Impor komponen Image
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            {/* LOGO AREA */}
            <Link href="/" className={styles.logoWrapper}>
                <Image
                    src="/logo1.png"          // Ganti dengan nama file logomu di folder public
                    alt="Logo Agensi"
                    width={135}              // Sesuaikan lebar logo
                    height={35}              // Sesuaikan tinggi logo
                    className={styles.logoImg}
                    priority                 // Agar logo dimuat paling awal
                />
            </Link>

            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? styles.barOpen : styles.bar}></span>
                <span className={isOpen ? styles.barOpen : styles.bar}></span>
                <span className={isOpen ? styles.barOpen : styles.bar}></span>
            </div>

            <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
                <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/#services" className={styles.link} onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/#contact" className={styles.link} onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}