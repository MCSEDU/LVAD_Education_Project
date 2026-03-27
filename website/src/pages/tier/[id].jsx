import React from 'react';
import { useRouter } from 'next/router';
import ModulePlayer from '../../components/ModulePlayer';

const TierPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Load modules for this tier
  const modules = []; // Placeholder

  if (!id) {
    return <div>Loading...</div>;
  }

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