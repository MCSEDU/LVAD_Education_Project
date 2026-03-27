import React from 'react';

const ModulePlayer = ({ module }) => {
  return (
    <div className="module-player">
      <h2>{module.title}</h2>
      <div>{module.content}</div>
    </div>
  );
};

export default ModulePlayer;