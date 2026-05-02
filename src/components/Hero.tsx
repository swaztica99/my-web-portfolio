"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* 1. BACKGROUND IMAGE (Ganti video dengan ini) */}
            <img
                src="/Artboard1.png"
                alt="Background"
                className={styles.bgImage} // Perhatikan classnya
            />

            {/* 2. OVERLAY (Agar teks lebih mudah dibaca) */}
            <div className={styles.overlay}></div>

            {/* 3. CONTENT (Teks & Tombol) */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.title}
                    >
                        Kembangkan Bisnis & Branding Anda dengan Website
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.description}
                    >
                        Saya membantu bisnis Anda berkembang dengan website modern,
                        responsif, dan berperforma tinggi yang dirancang untuk
                        meningkatkan kepercayaan dan konversi.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="#contact" className={styles.button}>
                            Mulai Konsultasi
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}