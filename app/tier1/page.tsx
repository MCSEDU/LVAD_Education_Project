import React from 'react';
import { Typography, Divider } from '@mui/material';

const Tier1Page = () => (
  <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Tier 1: Patient & Family LVAD Education Brief
    </Typography>

    <Typography variant="h6" gutterBottom>
      Audience
    </Typography>
    <ul>
      <li>LVAD patients (pre- and post-implant)</li>
      <li>Family members and designated caregivers</li>
      <li>Home health aides</li>
    </ul>

    <Typography variant="h6" gutterBottom>
      Learning Objectives
    </Typography>
    <p>Upon completion, learners will be able to:</p>
    <ol>
      <li>Describe the purpose and basic function of an LVAD</li>
      <li>Demonstrate proper driveline care and exit site management</li>
      <li>Identify and respond to LVAD alarms appropriately</li>
      <li>Perform controller battery changes safely</li>
      <li>Recognize warning signs requiring emergency response</li>
      <li>Explain activity restrictions and daily living adaptations</li>
    </ol>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h5" gutterBottom>
      Core Modules
    </Typography>

    <Typography variant="h6">Module 1: What is an LVAD?</Typography>
    <ul>
      <li>Definition and purpose of Left Ventricular Assist Device</li>
      <li>How blood flows through the device</li>
      <li>Types of LVAD devices (HeartMate 3, HeartWare HVAD legacy)</li>
      <li>Life with an LVAD — realistic expectations</li>
    </ul>

    <Typography variant="h6">Module 2: Equipment Overview</Typography>
    <ul>
      <li>System controller components</li>
      <li>Battery system and power management</li>
      <li>Backup equipment checklist</li>
      <li>Travel and transport considerations</li>
    </ul>

    <Typography variant="h6">Module 3: Driveline Care</Typography>
    <ul>
      <li>Daily inspection protocol</li>
      <li>Exit site cleaning (step-by-step with images)</li>
      <li>Dressing change technique</li>
      <li>Signs of infection — when to call your coordinator</li>
    </ul>

    <Typography variant="h6">Module 4: Alarm Management</Typography>
    <ul>
      <li>Green/yellow/red alarm tiers</li>
      <li>Common alarms explained in plain language</li>
      <li>Response flowchart for each alarm level</li>
      <li><strong>NEVER</strong> silence a red alarm without calling 911</li>
    </ul>

    <Typography variant="h6">Module 5: Emergency Response</Typography>
    <ul>
      <li>Who to call and when</li>
      <li>911 protocol — what to tell first responders</li>
      <li>Medical ID card usage</li>
      <li>Power failure protocol (hand pump, backup controller)</li>
    </ul>

    <Typography variant="h6">Module 6: Daily Living</Typography>
    <ul>
      <li>Showering and driveline protection</li>
      <li>Activity guidelines and exercise</li>
      <li>Dietary considerations (anticoagulation)</li>
      <li>Driving restrictions</li>
      <li>Sexual activity and intimacy</li>
      <li>Returning to work</li>
    </ul>

    <Divider style={{ margin: '20px 0' }} />

    <Typography variant="h6">Assessment</Typography>
    <ul>
      <li>20-question quiz (must pass ≥80%)</li>
      <li>Return demonstration checklist</li>
      <li>Emergency scenario role-play</li>
    </ul>

    <Typography variant="h6">Estimated Completion Time</Typography>
    <p>Self-paced: 4–6 hours</p>
    <p>Instructor-led: 2 days</p>

    <Typography variant="h6">Review Cycle</Typography>
    <p>Updated: [INSERT DATE]</p>
    <p>Next Review: [INSERT DATE + 12 months]</p>
    <p>Reviewed by: [INSERT CLINICAL EDUCATOR NAME]</p>
  </div>
);

export default Tier1Page;
