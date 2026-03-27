import React from 'react';

const TierCard = ({ tier, title, description }) => {
  return (
    <div className="tier-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Explore Tier {tier}</button>
    </div>
  );
};

export default TierCard;