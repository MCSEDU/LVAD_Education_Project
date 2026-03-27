# LVAD Education Website — GitHub Repository Starter

This repository contains a ready-to-clone structure for a 4-tier LVAD education
website project (Patients/Caregivers, SNF/Dialysis/Rehab Nurses, ICU/ED Nurses,
LVAD Coordinators/Clinicians). It includes a complete sprint backlog, site map
(text and Mermaid), draft content briefs, a launch/runbook, analytics schema,
governance (RACI), and a 90-day post-launch plan.

## How to use

### Clone the repository

```bash
git clone https://github.com/MCSEDU/LVAD_Education_Project.git
cd LVAD_Education_Project
```

### Review the structure

```bash
tree -a
```

### Start a new branch for your launch cycle

```bash
git checkout -b launch-q3-2026
```

### Validate and customize content

- Fill in placeholders in Briefs (`briefs/tier1.md`, etc.)
- Update `backlog.csv` with real dates if needed
- Update `postlaunch_plan.md` with your org's rollout plan

### Commit and push

```bash
git add -A
git commit -m "Initial repo structure and starter LVAD education artifacts"
git push -u origin launch-q3-2026
```

### Optional: CI workflows

Use the included `.github/workflows/ci.yml` to lint Markdown/JSON on push
