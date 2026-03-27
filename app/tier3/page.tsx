import React from 'react';
import { Typography, Divider } from '@mui/material';

const Tier3Page = () => (
  <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Tier 3: Advanced Practice Provider LVAD Education Brief
    </Typography>

    <Typography variant="h6" gutterBottom>
      Audience
    </Typography>
    <ul>
      <li>Nurse Practitioners (NP)</li>
      <li>Physician Assistants (PA)</li>
      <li>Clinical Nurse Specialists (CNS)</li>
      <li>Cardiology Fellows (early training)</li>
    </ul>

    <Typography variant="h6" gutterBottom>
      Prerequisites
    </Typography>
    <ul>
      <li>Tier 1 and Tier 2 completion</li>
      <li>Graduate-level cardiac physiology</li>
      <li>Heart failure management experience</li>
    </ul>

    <Typography variant="h6" gutterBottom>
      Learning Objectives
    </Typography>
    <ol>
      <li>Independently optimize LVAD speed settings within protocol</li>
      <li>Manage complex hemodynamic states in LVAD patients</li>
      <li>Lead outpatient LVAD clinic assessments</li>
      <li>Develop individualized anticoagulation strategies</li>
      <li>Triage and manage VAD-related complications autonomously</li>
      <li>Coordinate multidisciplinary LVAD team communication</li>
    </ol>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h5" gutterBottom>
      Core Modules
    </Typography>

    <Typography variant="h6">Module 1: Advanced Hemodynamic Assessment</Typography>
    <ul>
      <li>Ramp testing interpretation</li>
      <li>Swan-Ganz data in LVAD patients</li>
      <li>Echocardiographic assessment (aortic valve opening, LV dimensions)</li>
      <li>Volume status optimization</li>
    </ul>

    <Typography variant="h6">Module 2: Speed Optimization</Typography>
    <ul>
      <li>RPM adjustment indications</li>
      <li>Suction vs. underfill differentiation</li>
      <li>Right heart interdependence management</li>
      <li>Post-adjustment monitoring protocol</li>
    </ul>

    <Typography variant="h6">Module 3: Outpatient LVAD Clinic</Typography>
    <ul>
      <li>Structured clinic visit framework</li>
      <li>Functional capacity assessment (6MWT, KCCQ scoring)</li>
      <li>Quality of life monitoring tools</li>
      <li>Hospital readmission risk stratification</li>
    </ul>

    <Typography variant="h6">Module 4: Complex Anticoagulation</Typography>
    <ul>
      <li>Bridging strategies for procedures</li>
      <li>Heparin-induced thrombocytopenia (HIT) management</li>
      <li>Direct oral anticoagulant (DOAC) considerations</li>
      <li>Bleeding vs. thrombosis risk balancing</li>
    </ul>

    <Typography variant="h6">Module 5: Complication Management Protocols</Typography>
    <ul>
      <li>Pump thrombosis algorithm (medical vs. surgical)</li>
      <li>Stroke management pathway</li>
      <li>Right ventricular failure escalation (milrinone, RVAD consideration)</li>
      <li>Driveline infection staging and treatment</li>
      <li>GI bleeding endoscopy coordination</li>
    </ul>

    <Typography variant="h6">Module 6: End-of-Life Considerations</Typography>
    <ul>
      <li>LVAD deactivation ethics and process</li>
      <li>Goals of care conversations</li>
      <li>Palliative care integration</li>
      <li>Destination therapy vs. bridge-to-transplant re-evaluation</li>
    </ul>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h6">Competency Validation</Typography>
    <ul>
      <li>Case-based examination (10 complex cases, pass ≥85%)</li>
      <li>Supervised ramp study performance</li>
      <li>Direct observed practice — 5 clinic visits minimum</li>
    </ul>

    <Typography variant="h6">Estimated Completion Time</Typography>
    <p>16–20 hours + supervised practice</p>

    <Typography variant="h6">Review Cycle</Typography>
    <p>Updated: [INSERT DATE]</p>
    <p>Next Review: [INSERT DATE + 6 months]</p>
  </div>
);

export default Tier3Page;
