import React from 'react';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="progress-tracker">
      <h4>Your Progress</h4>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}% Complete</p>
    </div>
  );
};

export default ProgressTracker;