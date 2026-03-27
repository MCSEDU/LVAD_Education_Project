import React from 'react';
import styles from '../styles/McsCard.module.css';

export default function McsCard({ title, tag, items, href }) {
  return (
    <article className={styles.card} aria-label={title}>
      <header className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.badge} aria-label={tag}>{tag}</span>
      </header>
      <div className={styles.cardBody}>
        <ul className={styles.featureList}>
          {items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
        <div className={styles.ctaRow}>
          <a className={styles.primaryButton} href={href}>
            Learn More
          </a>
        </div>
      </div>
    </article>
  );
}
