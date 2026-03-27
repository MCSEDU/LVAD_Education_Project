import React from 'react';
import TierCard from '../components/TierCard';

const HomePage = () => {
  const tiers = [
    { id: 1, name: 'Patient & Family', description: 'Basic LVAD education' },
    { id: 2, name: 'Nursing Staff', description: 'Clinical care guidelines' },
    { id: 3, name: 'Advanced Providers', description: 'In-depth protocols' },
    { id: 4, name: 'Specialists', description: 'Expert management' },
  ];

  return (
    <div>
      <h1>LVAD Education Platform</h1>
      <div className="tiers">
        {tiers.map((tier) => (
          <TierCard key={tier.id} tier={tier.id} title={tier.name} description={tier.description} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;