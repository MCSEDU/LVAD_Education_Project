import React from 'react';
import { useParams } from 'react-router-dom';
import ModulePlayer from '../../components/ModulePlayer';

const TierPage = () => {
  const { id } = useParams();
  // Load modules for this tier
  const modules = []; // Placeholder

  return (
    <div>
      <h1>Tier {id} Modules</h1>
      {modules.map((module) => (
        <ModulePlayer key={module.id} module={module} />
      ))}
    </div>
  );
};

export default TierPage;