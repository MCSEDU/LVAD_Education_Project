import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const tiers = [
  {
    title: 'Tier 1',
    description: 'Patient & family LVAD education brief.',
    link: '/tier1',
  },
  {
    title: 'Tier 2',
    description: 'Bedside nursing & clinical staff LVAD education brief.',
    link: '/tier2',
  },
  {
    title: 'Tier 3',
    description: 'Advanced practice provider LVAD education brief.',
    link: '/tier3',
  },
  {
    title: 'Tier 4',
    description: 'Specialist & physician LVAD education brief.',
    link: '/tier4',
  },
];

const HomePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {tiers.map((tier) => (
        <Card key={tier.title} style={{ width: '30%', margin: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {tier.title}
            </Typography>
            <Typography variant="body2">
              {tier.description}
            </Typography>
            <Button variant="contained" href={tier.link} style={{ marginTop: '10px' }}>
              Choose {tier.title}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;