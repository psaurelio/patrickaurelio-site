import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.nameplate}>
        <h1 className={styles.name}>Patrick Aurelio</h1>
        <p className={styles.descriptor}>Product design &amp; strategy.</p>
      </div>
      <footer className={styles.footer}>
        <a href="mailto:psaurelio@icloud.com">psaurelio@icloud.com</a>
      </footer>
    </main>
  );
}
