import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./terms.module.css";

export default function TermsPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Syarat & Ketentuan</h1>
                <p className={styles.lastUpdated}>Terakhir diperbarui: 27 April 2026</p>

                <section className={styles.section}>
                    <h2>1. Batasan Layanan</h2>
                    <p>DamasDev.id sebagai penyedia jasa pembuatan website tidak menerima proyek yang mengandung unsur penipuan, perjudian, SARA, atau konten yang melanggar hukum di Indonesia.</p>
                </section>

                <section className={styles.section}>
                    <h2>2. Konten Website</h2>
                    <p>Seluruh konten (teks, gambar, video) yang diunggah ke website merupakan tanggung jawab penuh klien. Klien menjamin bahwa materi yang diberikan tidak melanggar hak cipta pihak manapun.</p>
                </section>

                <section className={styles.section}>
                    <h2>3. Pembayaran & Pembatalan</h2>
                    <p>Pembayaran dilakukan dengan sistem Down Payment (DP) sebesar 50% di awal. Apabila terjadi pembatalan sepihak oleh klien saat proyek berjalan, DP tidak dapat dikembalikan.</p>
                </section>

                <section className={styles.section}>
                    <h2>4. Revisi</h2>
                    <p>Revisi desain berlaku maksimal 2 kali setelah draft pertama diberikan. Penambahan fitur di luar kesepakatan awal akan dikenakan biaya tambahan sesuai tingkat kesulitan.</p>
                </section>

                <section className={styles.section}>
                    <h2>5. Masa Aktif & Perpanjangan</h2>
                    <p>Layanan domain dan hosting berlaku selama 1 tahun. Klien wajib melakukan perpanjangan paling lambat 7 hari sebelum masa aktif berakhir untuk menghindari penghapusan data secara otomatis oleh sistem.</p>
                </section>
            </div>
            <Footer />
        </main>
    );
}