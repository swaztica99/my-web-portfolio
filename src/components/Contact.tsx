import { MessageCircle, Mail } from 'lucide-react'; // Import icon
import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.title}>Siap Memulai Project?</h2>
                <p className={styles.subtitle}>
                    Konsultasikan kebutuhan website Anda secara gratis dan dapatkan penawaran terbaik.
                </p>

                <div className={styles.card}>
                    <h3>Hubungi Kami Melalui</h3>
                    <div className={styles.btnGroup}>
                        <a href="https://wa.me/6281809811311" target="_blank" className={styles.waBtn}>
                            <MessageCircle size={20} /> {/* Icon WA */}
                            <span>WhatsApp</span>
                        </a>
                        <Link href="/contact-form" className={styles.emailBtn}>
                            <Mail size={20} />
                            <span>Email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}