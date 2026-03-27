import React from 'react';
import TierCard from '../components/TierCard';
import Navigation from '../components/Navigation';

const tiers = [
  {
    id: 1,
    title: "Patient & Family Education",
    subtitle: "Tier 1 — Foundation",
    description: "Essential LVAD knowledge for patients and caregivers. Learn device basics, driveline care, alarm response, and daily living safely with an LVAD.",
    icon: "🫀",
    color: "#2196F3",
    bgColor: "#E3F2FD",
    audience: ["LVAD Patients", "Family Members", "Caregivers"],
    modules: 6,
    duration: "4–6 hours",
    passMark: "80%",
    path: "/tier/1"
  },
  {
    id: 2,
    title: "Bedside Nursing & Clinical Staff",
    subtitle: "Tier 2 — Intermediate",
    description: "Clinical competency for nurses and techs. Master hemodynamic monitoring, alarm management, and LVAD-specific nursing assessments.",
    icon: "🩺",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    audience: ["Registered Nurses", "ICU Staff", "Cardiac Technicians"],
    modules: 6,
    duration: "8–12 hours",
    passMark: "85%",
    path: "/tier/2"
  },
  {
    id: 3,
    title: "Advanced Practice Providers",
    subtitle: "Tier 3 — Advanced",
    description: "Advanced management for NPs, PAs, and CNS. Speed optimization, complex anticoagulation, complication protocols, and outpatient clinic leadership.",
    icon: "📋",
    color: "#FF9800",
    bgColor: "#FFF3E0",
    audience: ["Nurse Practitioners", "Physician Assistants", "CNS", "Fellows"],
    modules: 6,
    duration: "16–20 hours",
    passMark: "85%",
    path: "/tier/3"
  },
  {
    id: 4,
    title: "Specialist & Physician Level",
    subtitle: "Tier 4 — Expert",
    description: "Expert-level content for cardiologists and surgeons. Patient selection, surgical considerations, clinical trials, program development, and quality metrics.",
    icon: "🔬",
    color: "#9C27B0",
    bgColor: "#F3E5F5",
    audience: ["Cardiologists", "CT Surgeons", "Intensivists", "Program Directors"],
    modules: 6,
    duration: "24–40 hours",
    passMark: "Pass/Fail + Portfolio",
    path: "/tier/4"
  }
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navigation />

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span>🏥 Clinical Education Platform</span>
          </div>
          <h1 className={styles.heroTitle}>
            LVAD Education Center
          </h1>
          <p className={styles.heroSubtitle}>
            A comprehensive, tier-based learning platform for Left Ventricular
            Assist Device education — from patients and families to specialist
            physicians.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Education Tiers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24</span>
              <span className={styles.statLabel}>Learning Modules</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Hours of Content</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heartAnimation}>🫀</div>
        </div>
      </header>

      {/* Tier Selection */}
      <main className={styles.main}>
        <section className={styles.selectTierSection}>
          <h2>Select Your Learning Tier</h2>
          <p className={styles.sectionSubtitle}>
            Choose the education level that matches your role and experience with LVAD therapy.
          </p>
          <div className={styles.tierGrid}>
            {tiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>
        </section>

        {/* Info Banner */}
        <section className={styles.infoBanner}>
          <div className={styles.bannerContent}>
            <h3>⚠️ Clinical Disclaimer</h3>
            <p>
              This educational platform is intended to supplement, not replace,
              formal clinical training and institutional protocols. All patient
              care decisions should follow your institution's guidelines and
              device manufacturer's Instructions for Use (IFU).
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}