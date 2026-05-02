import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.container}>

                    {/* 1. Judul Khusus Mobile */}
                    <h1 className={styles.mobileTitle}>Tentang Saya</h1>

                    {/* 2. Sisi Gambar */}
                    <div className={styles.imageSide}>
                        <div className={styles.blueDecoration}></div>
                        <img
                            src="/profile3.png"
                            alt="Profil Saya"
                            className={styles.profileImg}
                        />
                    </div>

                    {/* 3. Sisi Teks (Desktop Title + Description) */}
                    <div className={styles.textSide}>
                        <h1 className={styles.desktopTitle}>Tentang Saya</h1>
                        <p className={styles.description}>
                            Saya Damasus, web developer yang berfokus pada pembuatan website modern,
                            responsif, dan fungsional. Saya membantu individu, UMKM, hingga bisnis
                            berkembang dalam membangun kehadiran digital yang profesional dan efektif.
                            Dengan menggabungkan desain yang menarik dan performa yang optimal,
                            saya memastikan setiap website tidak hanya terlihat bagus, tetapi juga
                            memberikan pengalaman terbaik bagi pengguna.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}