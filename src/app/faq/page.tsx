"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import styles from "./FAQ.module.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const faqData = [
    {
        question: "Apa itu Landing Page?",
        answer:
            "Landing page adalah halaman web tunggal yang dirancang khusus untuk kampanye pemasaran atau periklanan. Tujuannya adalah untuk mengarahkan pengunjung melakukan tindakan tertentu (konversi)."
    },
    {
        question: "Berapa lama proses pengerjaan website?",
        answer:
            "Proses pengerjaan bergantung pada kompleksitas. Landing Page biasanya memakan waktu 3-5 hari, sedangkan Company Profile atau E-Commerce bisa 1-2 minggu."
    },
    {
        question: "Apakah website sudah termasuk Hosting dan Domain?",
        answer:
            "Secara umum, biaya pembuatan website belum termasuk hosting dan domain. Namun saya dapat membantu proses pembelian, setup, dan rekomendasi terbaik sesuai kebutuhan Anda."
    },
    {
        question: "Apakah saya bisa merevisi desain website?",
        answer: (
            <>
                Tentu. Kami memberikan kuota revisi sesuai paket yang diambil
                untuk memastikan hasil akhir sesuai dengan keinginan Anda. Anda
                bisa baca ketentuannya{" "}
                <Link href="/terms" className={styles.linkText}>
                    di sini
                </Link>
                .
            </>
        )
    },
    {
        question: "Bagaimana sistem pembayarannya?",
        answer: (
            <>
                Kami menggunakan sistem DP 50% di awal sebagai tanda jadi,
                dan pelunasan 50% dilakukan setelah website selesai dan siap dipublikasikan.
                Anda bisa baca ketentuanya{" "}
                <Link href="/terms" className={styles.linkText}>
                    di sini
                </Link>
                .
            </>
        )
    },
    {
        question: "Apa benefit yang saya dapatkan?",
        answer: "Memiliki website memberikan banyak manfaat signifikan, baik untuk bisnis, profesional, dan instansi, serta meningkatkan kredibilitas di dunia digital."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main>
            <Navbar />

            <section className={styles.faqSection} id="faq">
                <div className={styles.container}>
                    {/* SISI KIRI */}
                    <div className={styles.leftSide}>
                        <img
                            src="/Artboard1.png"
                            alt="FAQ Background"
                            className={styles.bgImage}
                        />

                        <div className={styles.overlay}>
                            <h2 className={styles.title}>
                                Frequently asked questions
                            </h2>

                            <p className={styles.description}>
                                Temukan jawaban atas pertanyaan yang sering
                                diajukan seputar layanan pembuatan website,
                                proses kerja, harga, dan dukungan.
                            </p>

                            <div className={styles.ctaArea}>
                                <span>atau bisa juga</span>

                                <Link
                                    href="/#contact"
                                    className={styles.contactBtn}
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* SISI KANAN */}
                    <div className={styles.rightSide}>
                        {faqData.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={styles.question}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{item.question}</span>

                                    <motion.div
                                        animate={{
                                            rotate:
                                                activeIndex === index
                                                    ? 180
                                                    : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={24} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }}
                                            className={styles.answerWrapper}
                                        >
                                            <div className={styles.answer}>
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}