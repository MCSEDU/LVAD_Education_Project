import React from 'react';
import Navigation from '../components/Navigation';
import styles from '../styles/globals.module.css'; // or your preferred CSS module

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navigation />

      {/* Existing hero / introductory content above */}

      {/* NEW: Two-column section for MCS devices */}
      <section aria-label="Mechanical Circulatory Support (MCS) device types" className={styles.twoColSection}>
        <div className={styles.sectionHeader}>
          <h2>Temporary MCS Device vs Durable MCS Device</h2>
          <p className={styles.sectionSubtitle}>
            A concise comparison of temporary (bridging) devices vs durable (implantable) devices used in circulatory support.
          </p>
        </div>

        <div className={styles.grid2}>
          {/* Column 1: Temporary MCS Device */}
          <article className={styles.card} aria-label="Temporary MCS Device">
            <header className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Temporary MCS Device</h3>
              <span className={styles.badge} aria-label="Temporary badge">Temporary</span>
            </header>
            <div className={styles.cardBody}>
              <ul className={styles.featureList}>
                <li>Bridging support for acute heart failure or post-cardiotomy shock</li>
                <li>External controller/power supply; typically extracorporeal or paracorporeal</li>
                <li>Often used as a bridge to durable LVAD or transplant</li>
                <li>Shorter-term prognosis; device explant if recovery or transition occurs</li>
              </ul>
              <div className={styles.ctaRow}>
                <button className={styles.primaryButton} aria-label="Learn more about Temporary MCS">
                  Learn More
                </button>
              </div>
            </div>
          </article>

          {/* Column 2: Durable MCS Device */}
          <article className={styles.card} aria-label="Durable MCS Device">
            <header className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Durable MCS Device</h3>
              <span className={styles.badge} aria-label="Durable badge">Durable</span>
            </header>
            <div className={styles.cardBody}>
              <ul className={styles.featureList}>
                <li>Implantable LVAD or other left/right ventricular assist devices</li>
                <li>Long-term support with power via implanted/external systems</li>
                <li>Often part of destination therapy or bridge-to-transplant programs</li>
                <li>Comprehensive follow-up and device optimization as part of care pathway</li>
              </ul>
              <div className={styles.ctaRow}>
                <button className={styles.primaryButton} aria-label="Learn more about Durable MCS">
                  Learn More
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Existing content below... */}
    </div>
  );
}
