import React from 'react';
import { Typography, Divider } from '@mui/material';

const Tier2Page = () => (
  <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Tier 2: Bedside Nursing & Clinical Staff LVAD Education Brief
    </Typography>

    <Typography variant="h6" gutterBottom>
      Audience
    </Typography>
    <ul>
      <li>Registered Nurses (RN) — cardiac step-down, ICU, telemetry</li>
      <li>Patient Care Technicians</li>
      <li>Rehabilitation therapists working with LVAD patients</li>
    </ul>

    <Typography variant="h6" gutterBottom>
      Prerequisites
    </Typography>
    <ul>
      <li>Tier 1 content reviewed</li>
      <li>Basic cardiac monitoring competency</li>
      <li>ACLS certification (preferred)</li>
    </ul>

    <Typography variant="h6" gutterBottom>
      Learning Objectives
    </Typography>
    <ol>
      <li>Perform a comprehensive LVAD-specific nursing assessment</li>
      <li>Interpret LVAD parameters (flow, speed, pulsatility index, power)</li>
      <li>Manage device alarms with clinical decision-making</li>
      <li>Recognize and escalate hemodynamic complications</li>
      <li>Administer anticoagulation safely in LVAD patients</li>
      <li>Prepare patient for diagnostic procedures with LVAD in situ</li>
    </ol>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h5" gutterBottom>
      Core Modules
    </Typography>

    <Typography variant="h6">Module 1: LVAD Hemodynamics</Typography>
    <ul>
      <li>Cardiac output interpretation in LVAD patients</li>
      <li>MAP targets (70–80 mmHg optimal)</li>
      <li>Pulsatility Index (PI) significance</li>
      <li>Flow waveform interpretation</li>
    </ul>

    <Typography variant="h6">Module 2: Nursing Assessment Protocol</Typography>
    <ul>
      <li>Shift assessment checklist</li>
      <li>Auscultation findings (diminished S1/S2 — expected)</li>
      <li>Blood pressure measurement technique (Doppler)</li>
      <li>Peripheral perfusion assessment</li>
    </ul>

    <Typography variant="h6">Module 3: Alarm Management — Clinical Response</Typography>
    <ul>
      <li>Low Flow alarms: differential diagnosis</li>
      <li>Suction events: causes and interventions</li>
      <li>Power alarms: equipment troubleshooting</li>
      <li>Controller exchange protocol</li>
    </ul>

    <Typography variant="h6">Module 4: Anticoagulation Management</Typography>
    <ul>
      <li>INR targets (2.0–3.0 standard; device-specific ranges)</li>
      <li>Heparin bridge protocols</li>
      <li>Bleeding risk assessment</li>
      <li>GI bleed — LVAD specific considerations (AVWS)</li>
    </ul>

    <Typography variant="h6">Module 5: Complications Recognition</Typography>
    <ul>
      <li>Right heart failure signs and management</li>
      <li>Pump thrombosis early indicators</li>
      <li>Driveline infection staging</li>
      <li>Stroke protocol in LVAD patients</li>
      <li>Hemolysis workup (elevated LDH, pink plasma)</li>
    </ul>

    <Typography variant="h6">Module 6: Procedures & Safety</Typography>
    <ul>
      <li>MRI compatibility (device-specific protocols)</li>
      <li>Defibrillation and cardioversion safely</li>
      <li>CPR considerations (chest compressions — consult VAD team)</li>
      <li>Surgical procedure prep checklist</li>
    </ul>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h6">Skills Validation</Typography>
    <ul>
      <li>Simulation lab: alarm response scenarios</li>
      <li>Supervised clinical shift with VAD coordinator</li>
      <li>Written competency exam (pass ≥85%)</li>
    </ul>

    <Typography variant="h6">Estimated Completion Time</Typography>
    <p>8–12 hours including simulation</p>

    <Typography variant="h6">Review Cycle</Typography>
    <p>Updated: [INSERT DATE]</p>
    <p>Next Review: [INSERT DATE + 12 months]</p>
    <p>Reviewed by: [INSERT CLINICAL EDUCATOR NAME]</p>
  </div>
);

export default Tier2Page;
