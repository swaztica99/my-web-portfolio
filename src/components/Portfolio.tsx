import styles from './Portfolio.module.css';

const projects = [
    { title: "Project Coffee Shop", category: "Landing Page", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500" },
    { title: "Project E-Commerce", category: "Online Store", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500" },
    { title: "Project Agency Digital", category: "Company Profile", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Projek Kami</h2>
                <div className={styles.grid}>
                    {projects.map((p, i) => (
                        <div key={i} className={styles.item}>
                            <div className={styles.imgWrapper}>
                                <img src={p.img} alt={p.title} className={styles.img} />
                                <div className={styles.overlay}>
                                    <span>{p.category}</span>
                                    <h3>{p.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}