"use client";
import { useParams } from 'next/navigation';
import { PACKAGES } from '@/constants/packages';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './package.module.css';
import { CheckCircle } from 'lucide-react';

export default function PackageDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const data = PACKAGES[slug as keyof typeof PACKAGES];

    if (!data) return <div className={styles.notFound}>Paket tidak ditemukan.</div>;

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.icon}>{data.icon}</span>
                    <h1>Paket {data.title}</h1>
                    <p className={styles.price}>{data.price} <span>/ project</span></p>
                </div>

                <div className={styles.content}>
                    <h3>Apa saja yang Anda dapatkan?</h3>
                    <ul className={styles.featureList}>
                        {data.features.map((feature, index) => (
                            <li key={index}>
                                <CheckCircle size={20} color="#0047FF" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.actionBox}>
                        <p>Tertarik dengan paket ini?</p>
                        <a
                            href={`https://wa.me/6281809811311text=Halo, saya tertarik pesan paket ${data.title}`}
                            target="_blank"
                            className={styles.orderBtn}
                        >
                            Pesan Paket Sekarang
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}