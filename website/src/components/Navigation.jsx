import React from 'react';

const Navigation = ({ tiers }) => {
  return (
    <nav>
      <ul>
        {tiers.map((tier) => (
          <li key={tier.id}>
            <a href={`/tier/${tier.id}`}>{tier.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;