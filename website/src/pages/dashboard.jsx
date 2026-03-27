import React from 'react';
import ProgressTracker from '../components/ProgressTracker';

const DashboardPage = () => {
  const progress = 75; // Placeholder

  return (
    <div>
      <h1>User Dashboard</h1>
      <ProgressTracker progress={progress} />
    </div>
  );
};

export default DashboardPage;