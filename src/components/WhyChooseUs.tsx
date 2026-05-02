"use client";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3, Smartphone } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const reasons = [
    {
        icon: <Zap size={32} />,
        title: "Performa Tanpa Kompromi",
        desc: "Website dibangun dengan Next.js terbaru untuk memastikan kecepatan loading maksimal. Website cepat berarti peringkat SEO lebih baik dan klien lebih betah."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Keamanan & Stabilitas",
        desc: "Kami menjamin kode yang bersih (clean code) dan standar keamanan tinggi untuk melindungi data bisnis Anda dari serangan siber."
    },
    {
        icon: <Smartphone size={32} />,
        title: "Desain Responsif",
        desc: "Lebih dari 80% pengguna internet menggunakan HP. Kami memastikan website Anda tampil sempurna di semua perangkat, mulai dari laptop hingga smartphone."
    },
    {
        icon: <BarChart3 size={32} />,
        title: "Berorientasi Hasil",
        desc: "Kami tidak hanya membuat website yang indah, tapi juga fungsional untuk meningkatkan konversi penjualan dan pertumbuhan bisnis Anda."
    }
];

export default function WhyChooseUs() {
    return (
        <section className={styles.section} id="why-us">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={styles.label}
                    >
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.title}
                    >
                        Kenapa Mempercayakan Project <br /> Anda kepada <span className={styles.brand}>DamasDev?</span>
                    </motion.h2>
                    <p className={styles.subtitle}>
                        Kami percaya bahwa website adalah investasi jangka panjang,
                        bukan sekadar biaya tambahan bagi bisnis Anda.
                    </p>
                </div>

                <div className={styles.grid}>
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.card}
                        >
                            <div className={styles.iconBox}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}