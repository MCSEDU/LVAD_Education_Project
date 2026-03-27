import React from 'react';
import { Typography, Divider } from '@mui/material';

const Tier4Page = () => (
  <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Tier 4: Specialist & Physician LVAD Education Brief
    </Typography>

    <Typography variant="h6" gutterBottom>
      Audience
    </Typography>
    <ul>
      <li>Advanced Heart Failure Cardiologists</li>
      <li>Cardiothoracic Surgeons</li>
      <li>Critical Care / Cardiac Intensivists</li>
      <li>Transplant Physicians</li>
      <li>VAD Program Directors</li>
    </ul>

    <Typography variant="h6" gutterBottom>
      Prerequisites
    </Typography>
    <ul>
      <li>Tiers 1–3 completion</li>
      <li>Board certification or eligibility in relevant specialty</li>
      <li>ISHLT VAD guidelines familiarity</li>
    </ul>

    <Typography variant="h6" gutterBottom>
      Learning Objectives
    </Typography>
    <ol>
      <li>Lead patient selection and candidacy evaluation</li>
      <li>Interpret advanced device diagnostics and trending data</li>
      <li>Manage surgical complications and re-operative strategies</li>
      <li>Direct clinical trial participation and research protocols</li>
      <li>Establish and audit institutional LVAD quality metrics</li>
      <li>Train and mentor lower-tier staff and trainees</li>
    </ol>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h5" gutterBottom>
      Core Modules
    </Typography>

    <Typography variant="h6">Module 1: Patient Selection & Candidacy</Typography>
    <ul>
      <li>INTERMACS profiles and timing of implant</li>
      <li>Contraindication assessment (RV function, frailty scoring)</li>
      <li>Bridge-to-transplant vs. destination therapy decision framework</li>
      <li>Ethical considerations in device selection</li>
    </ul>

    <Typography variant="h6">Module 2: Surgical Considerations</Typography>
    <ul>
      <li>Operative approaches (median sternotomy vs. less-invasive)</li>
      <li>Intraoperative TEE guidance</li>
      <li>De-air protocols and post-bypass weaning</li>
      <li>Re-operative strategies (pump exchange, lead revision)</li>
      <li>Bleeding and coagulopathy management perioperatively</li>
    </ul>

    <Typography variant="h6">Module 3: Advanced Device Analytics</Typography>
    <ul>
      <li>Remote monitoring platforms (HeartLogic, VAD remote data)</li>
      <li>Long-term trend analysis (power spikes, PI trends)</li>
      <li>Predictive analytics for thrombosis and readmission</li>
      <li>Data-driven speed optimization</li>
    </ul>

    <Typography variant="h6">Module 4: Research & Clinical Trials</Typography>
    <ul>
      <li>Current landmark trials (MOMENTUM 3, ENDURANCE, ARIES-HM3)</li>
      <li>Enrolling patients in active registries</li>
      <li>Outcome metrics: survival, QoL, adverse event reporting</li>
      <li>IRB and regulatory compliance for VAD research</li>
    </ul>

    <Typography variant="h6">Module 5: Program Development & Quality</Typography>
    <ul>
      <li>INTERMACS registry participation</li>
      <li>Quality metrics dashboard (30-day readmissions, adverse events)</li>
      <li>VAD team structure and credentialing standards</li>
      <li>JCAHO / Joint Commission VAD program accreditation</li>
      <li>Morbidity & Mortality conference structure for VAD cases</li>
    </ul>

    <Typography variant="h6">Module 6: Advanced Complication Management</Typography>
    <ul>
      <li>Pump thrombosis — surgical explant decision criteria</li>
      <li>Aortic insufficiency development and management</li>
      <li>LVAD in pregnancy — case-based review</li>
      <li>Gastrointestinal bleeding — AVM pathophysiology and novel therapies</li>
      <li>Neurological events — stroke prophylaxis strategies</li>
    </ul>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h6">Competency Validation</Typography>
    <ul>
      <li>Peer-reviewed case portfolio submission</li>
      <li>Program director sign-off</li>
      <li>Annual CME requirement: 8 hours LVAD-specific</li>
    </ul>

    <Typography variant="h6">Estimated Completion Time</Typography>
    <p>24–40 hours + supervised procedural cases</p>

    <Typography variant="h6">Review Cycle</Typography>
    <p>Updated: [INSERT DATE]</p>
    <p>Next Review: [INSERT DATE + 6 months]</p>
    <p>Reviewed by: [INSERT PROGRAM DIRECTOR]</p>
  </div>
);

export default Tier4Page;
