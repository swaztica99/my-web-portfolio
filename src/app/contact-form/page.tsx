"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "./contact-form.module.css";
import Footer from "@/components/Footer";
import { sendEmail } from "../actions";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    async function handleSubmit(formData: FormData) {
        setStatus("sending");
        const result = await sendEmail(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
        }
    }

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>

                {status === "success" ? (
                    /* TAMPILAN SAAT SUKSES (Tanpa Judul Kirim Pesan) */
                    <div className={styles.successMessage}>
                        <h2>✅ Pesan Terkirim!</h2>
                        <p>Terima kasih sudah menghubungi. Saya akan membalas pesan Anda segera.</p>
                        <button onClick={() => setStatus("idle")} className={styles.submitBtn}>
                            Kirim Pesan Lagi
                        </button>
                    </div>
                ) : (
                    /* TAMPILAN SAAT FORM AKTIF (Judul Muncul di Sini) */
                    <>
                        <h1 className={styles.title}>Kirim Pesan</h1>
                        <p className={styles.desc}>Isi formulir di bawah, saya akan membalasnya sesegera mungkin.</p>

                        <form action={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Nama Lengkap</label>
                                <input type="text" name="name" required placeholder="Jhon Doe" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email Anda</label>
                                <input type="email" name="email" required placeholder="email@contoh.com" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Pesan</label>
                                <textarea name="message" rows={6} required placeholder="Halo, saya ingin buat website..."></textarea>
                            </div>

                            <button type="submit" disabled={status === "sending"} className={styles.submitBtn}>
                                {status === "sending" ? "Sedang Mengirim..." : "Kirim Email Sekarang"}
                            </button>
                            {status === "error" && <p style={{ color: 'red', marginTop: '10px' }}>Terjadi kesalahan, coba lagi nanti.</p>}
                        </form>
                    </>
                )}

            </div>
            <Footer />
        </main>
    );
}