import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/TierCard.module.css';

export default function TierCard({ tier }) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      style={{
        borderColor: tier.color,
        backgroundColor: tier.bgColor
      }}
      onClick={() => router.push(tier.path)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && router.push(tier.path)}
      aria-label={`Navigate to ${tier.title}`}
    >
      {/* Card Header */}
      <div className={styles.cardHeader} style={{ backgroundColor: tier.color }}>
        <span className={styles.tierIcon}>{tier.icon}</span>
        <div>
          <span className={styles.tierBadge}>Tier {tier.id}</span>
          <h3 className={styles.tierTitle}>{tier.title}</h3>
          <p className={styles.tierSubtitle}>{tier.subtitle}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        <p className={styles.description}>{tier.description}</p>

        {/* Audience Tags */}
        <div className={styles.audienceSection}>
          <span className={styles.label}>Audience:</span>
          <div className={styles.tags}>
            {tier.audience.map((a, i) => (
              <span
                key={i}
                className={styles.tag}
                style={{ borderColor: tier.color, color: tier.color }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>📚</span>
            <span>{tier.modules} Modules</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>⏱️</span>
            <span>{tier.duration}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>✅</span>
            <span>Pass: {tier.passMark}</span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className={styles.cardFooter} style={{ borderColor: tier.color }}>
        <button
          className={styles.startButton}
          style={{ backgroundColor: tier.color }}
          onClick={(e) => {
            e.stopPropagation();
            router.push(tier.path);
          }}
        >
          Start Learning →
        </button>
      </div>
    </div>
  );
}