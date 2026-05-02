import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3 className={styles.brand}>DamasDev</h3>
                    <p className={styles.slogan}>Solusi website modern untuk membantu bisnis tumbuh dan tampil lebih profesional.</p>
                </div>

                <div className={styles.nav}>
                    <div className={styles.navGroup}>
                        <h4>Navigasi</h4>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/#services">Services</Link>
                    </div>
                    <div className={styles.navGroup}>
                        <h4>Legal</h4>
                        <Link href="/terms">Terms & Conditions</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contact-form">Contact</Link>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {currentYear} DamasDev. All rights reserved.</p>
            </div>
        </footer>
    );
}