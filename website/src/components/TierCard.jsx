import React from 'react';
import { Link } from 'react-router-dom';

const TierCard = ({ tier }) => {
  return (
    <div className="tier-card" style={{ backgroundColor: tier.bgColor, borderColor: tier.color }}>
      <div className="tier-icon">{tier.icon}</div>
      <h3 style={{ color: tier.color }}>{tier.title}</h3>
      <p className="tier-subtitle">{tier.subtitle}</p>
      <p className="tier-description">{tier.description}</p>
      <div className="tier-meta">
        <span>{tier.modules} modules</span>
        <span>{tier.duration}</span>
        <span>Pass: {tier.passMark}</span>
      </div>
      <div className="tier-audience">
        <strong>Audience:</strong> {tier.audience.join(', ')}
      </div>
      <Link to={tier.path}>
        <button style={{ backgroundColor: tier.color }}>Start Learning</button>
      </Link>
    </div>
  );
};

export default TierCard;