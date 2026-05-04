// src/components/Services.tsx
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
    { slug: "landing-page", title: "Landing Page", icon: "🚀", desc: "Fokus pada konversi penjualan." },
    { slug: "company-profile", title: "Company Profile", icon: "🏢", desc: "Meningkatkan kredibilitas bisnis." },
    { slug: "e-commerce", title: "E-Commerce", icon: "🛒", desc: "Toko online dengan fitur lengkap." },
    { slug: "custom-website", title: "Custom Website", icon: "🎨", desc: "Website sesuai keinginan klien" }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Layanan Saya</h2>
                <div className={styles.grid}>
                    {services.map((s) => (
                        <Link href={`#${s.slug}`} key={s.slug} className={styles.card}>
                            <div className={styles.icon}>{s.icon}</div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}