import React from 'react';
import styles from '../styles/globals.module.css';

export default function McsCard({ title, tag, items, onLearnMore }) {
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
          <button className={styles.primaryButton} onClick={onLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
}
