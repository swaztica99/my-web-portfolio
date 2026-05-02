"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./References.module.css";
import { REFERENCES } from "@/constants/references";

export default function References() {
    const phoneNumber = "6281809811311"; // GANTI NOMOR WA
    const sliderRef = useRef<HTMLDivElement>(null);

    // State untuk memunculkan tombol kiri dan kanan
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Fungsi untuk mengecek posisi scroll
    const checkScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 20); // Muncul jika sudah digeser ke kanan
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20); // Muncul jika belum mentok kanan
        }
    };

    useEffect(() => {
        checkScroll(); // Cek saat pertama kali load
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    // Fungsi menggeser ke kanan
    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    // Fungsi menggeser ke kiri
    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    return (
        <section className={styles.section} id="references">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Referensi Projek</h2>
                    <p className={styles.subtitle}>
                        Pilih model website yang Anda sukai. Semua referensi di bawah dapat dipesan dan dimodifikasi sesuai kebutuhan bisnis Anda.
                    </p>
                </div>

                {/* CONTAINER SLIDER */}
                <div className={styles.sliderWrapper}>

                    {/* Tombol Geser Kiri (Muncul Bersyarat) */}
                    {canScrollLeft && (
                        <button className={`${styles.navBtn} ${styles.leftBtn}`} onClick={slideLeft}>
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    {/* Tombol Geser Kanan (Muncul Bersyarat) */}
                    {canScrollRight && (
                        <button className={`${styles.navBtn} ${styles.rightBtn}`} onClick={slideRight}>
                            <ChevronRight size={24} />
                        </button>
                    )}

                    {/* List Card Horizontal */}
                    <div className={styles.slider} ref={sliderRef} onScroll={checkScroll}>
                        {REFERENCES.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <img src={item.image} alt={item.title} className={styles.image} />

                                <div className={styles.overlay}>
                                    <div className={styles.textInfo}>
                                        <span className={styles.category}>{item.category}</span>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                    </div>

                                    <div className={styles.buttonGroup}>
                                        <a
                                            href={`https://wa.me/${phoneNumber}?text=Halo DamasDev, saya tertarik memesan website dengan referensi: ${item.title}`}
                                            target="_blank"
                                            className={styles.pesanBtn}
                                        >
                                            <ShoppingCart size={18} />
                                            Pesan
                                        </a>

                                        <a href={item.url} target="_blank" className={styles.visitBtn}>
                                            <ExternalLink size={18} />
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}