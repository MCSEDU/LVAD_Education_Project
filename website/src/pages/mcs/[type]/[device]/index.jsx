import React from 'react';
import { useRouter } from 'next/router';
import Navigation from '../../../../components/Navigation';
import styles from '../../../../styles/DeviceIntro.module.css';

export default function DeviceIntroPage() {
  const router = useRouter();
  const { type, device, tier } = router.query;
  const selectedTier = Number(tier) || 1;

  return (
    <div className={styles.container}>
      <Navigation />
      <section className={styles.breadcrumb} aria-label="breadcrumb">
        <button onClick={() => router.push('/')}>Home</button>
        <span>›</span>
        <button onClick={() => router.push(`/mcs/${type}`)}>
          {type === 'temporary' ? 'Temporary MCS' : 'Durable MCS'}
        </button>
        <span>›</span>
        <span>{device?.toUpperCase() || 'Device'} Intro</span>
      </section>
      <main className={styles.content}>
        <h1>{device?.toUpperCase() || 'Device'} - {type?.charAt(0).toUpperCase() + type?.slice(1)} MCS</h1>
        <p>Tier {selectedTier} introduction content will be loaded here.</p>

        <p>
          This page should fetch and display correct device intro data from
          <code>website/content/intros/mcs/{type}/{device}_tier{selectedTier}.json</code>
        </p>

        <div className={styles.actions}>
          <button onClick={() => router.push(`/mcs/${type}`)}>
            Back to {type === 'temporary' ? 'Temporary' : 'Durable'} Devices
          </button>
        </div>
      </main>
    </div>
  );
}
