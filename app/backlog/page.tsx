import React from 'react';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const backlogItems = [
  { id: 'T1-001', tier: 'Tier 1', task: 'Write patient intro module content', owner: 'Content Team', priority: 'High', status: 'In Progress', start: '2026-04-01', due: '2026-04-15', notes: 'Plain language review needed' },
  { id: 'T1-002', tier: 'Tier 1', task: 'Create driveline care step-by-step images', owner: 'Media Team', priority: 'High', status: 'Not Started', start: '2026-04-10', due: '2026-04-25', notes: 'Coordinate with clinical photography' },
  { id: 'T1-003', tier: 'Tier 1', task: 'Build emergency response flowchart', owner: 'Design Team', priority: 'High', status: 'Not Started', start: '2026-04-05', due: '2026-04-20', notes: 'Use red/yellow/green color coding' },
  { id: 'T1-004', tier: 'Tier 1', task: 'Develop 20-question patient quiz', owner: 'Education Team', priority: 'Medium', status: 'Not Started', start: '2026-04-15', due: '2026-05-01', notes: '80% pass threshold' },
  { id: 'T2-001', tier: 'Tier 2', task: 'Write alarm management clinical module', owner: 'Clinical Educator', priority: 'High', status: 'Not Started', start: '2026-04-01', due: '2026-04-20', notes: 'Include decision trees' },
  { id: 'T2-002', tier: 'Tier 2', task: 'Develop nursing assessment checklist', owner: 'VAD Coordinator', priority: 'High', status: 'Not Started', start: '2026-04-05', due: '2026-04-25', notes: 'Validate with bedside staff' },
  { id: 'T2-003', tier: 'Tier 2', task: 'Build hemodynamics interactive module', owner: 'Dev Team', priority: 'Medium', status: 'Not Started', start: '2026-04-20', due: '2026-05-10', notes: 'Interactive PI/flow graphs' },
  { id: 'T2-004', tier: 'Tier 2', task: 'Create simulation scenarios (3 cases)', owner: 'Simulation Lab', priority: 'High', status: 'Not Started', start: '2026-05-01', due: '2026-05-20', notes: 'Record video walkthroughs' },
  { id: 'T3-001', tier: 'Tier 3', task: 'Write ramp study interpretation guide', owner: 'APP Lead', priority: 'High', status: 'Not Started', start: '2026-04-15', due: '2026-05-05', notes: 'Include echo correlation' },
  { id: 'T3-002', tier: 'Tier 3', task: 'Develop complex anticoagulation module', owner: 'Pharmacist', priority: 'Medium', status: 'Not Started', start: '2026-04-20', due: '2026-05-15', notes: 'Review with hematology' },
  { id: 'T3-003', tier: 'Tier 3', task: 'Create 10 complex case studies', owner: 'Clinical Team', priority: 'High', status: 'Not Started', start: '2026-05-01', due: '2026-05-25', notes: 'De-identified real cases preferred' },
  { id: 'T3-004', tier: 'Tier 3', task: 'EOL/deactivation ethics module', owner: 'Palliative Care', priority: 'Medium', status: 'Not Started', start: '2026-05-10', due: '2026-05-30', notes: 'Ethics committee review required' },
  { id: 'T4-001', tier: 'Tier 4', task: 'Write surgical considerations module', owner: 'CT Surgery', priority: 'High', status: 'Not Started', start: '2026-04-15', due: '2026-05-10', notes: 'Intraoperative TEE section' },
  { id: 'T4-002', tier: 'Tier 4', task: 'Build quality metrics dashboard page', owner: 'Dev Team', priority: 'High', status: 'Not Started', start: '2026-05-01', due: '2026-06-01', notes: 'INTERMACS data integration' },
  { id: 'T4-003', tier: 'Tier 4', task: 'Compile clinical trials summary', owner: 'Research Team', priority: 'Medium', status: 'Not Started', start: '2026-05-05', due: '2026-05-25', notes: 'Include MOMENTUM 3 outcomes' },
  { id: 'T4-004', tier: 'Tier 4', task: 'Program development guide', owner: 'Program Director', priority: 'Low', status: 'Not Started', start: '2026-05-15', due: '2026-06-15', notes: 'JCAHO accreditation section' },
  { id: 'WEB-001', tier: 'Website', task: 'Set up Next.js project scaffold', owner: 'Dev Team', priority: 'High', status: 'In Progress', start: '2026-04-01', due: '2026-04-10', notes: 'Node 18+ required' },
  { id: 'WEB-002', tier: 'Website', task: 'Implement tier landing pages', owner: 'Dev Team', priority: 'High', status: 'Not Started', start: '2026-04-10', due: '2026-04-25', notes: 'Responsive design required' },
  { id: 'WEB-003', tier: 'Website', task: 'Build quiz engine component', owner: 'Dev Team', priority: 'High', status: 'Not Started', start: '2026-04-20', due: '2026-05-10', notes: 'JSON-driven question bank' },
  { id: 'WEB-004', tier: 'Website', task: 'Implement progress tracking', owner: 'Dev Team', priority: 'Medium', status: 'Not Started', start: '2026-05-01', due: '2026-05-20', notes: 'LocalStorage + backend API' },
  { id: 'WEB-005', tier: 'Website', task: 'Accessibility audit (WCAG 2.1 AA)', owner: 'QA Team', priority: 'High', status: 'Not Started', start: '2026-06-01', due: '2026-06-15', notes: 'Required for healthcare' },
  { id: 'WEB-006', tier: 'Website', task: 'User acceptance testing', owner: 'All Teams', priority: 'High', status: 'Not Started', start: '2026-06-15', due: '2026-06-30', notes: 'Patients + clinical staff' },
  { id: 'LAUNCH-001', tier: 'Launch', task: 'Soft launch to VAD coordinators', owner: 'Program Director', priority: 'High', status: 'Not Started', start: '2026-07-01', due: '2026-07-07', notes: 'Collect feedback' },
  { id: 'LAUNCH-002', tier: 'Launch', task: 'Full Q3 2026 launch', owner: 'All Teams', priority: 'High', status: 'Not Started', start: '2026-07-15', due: '2026-07-15', notes: 'Go-live date' },
];

const BacklogPage = () => (
  <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Project Backlog
    </Typography>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Tier</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {backlogItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.tier}</TableCell>
              <TableCell>{item.task}</TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell>{item.priority}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.start}</TableCell>
              <TableCell>{item.due}</TableCell>
              <TableCell>{item.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default BacklogPage;
