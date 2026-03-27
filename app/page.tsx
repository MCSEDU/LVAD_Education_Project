import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const tiers = [
  {
    title: 'Beginner',
    description: 'Introduction to LVADs and their purpose.',
    link: '/beginner',
  },
  {
    title: 'Intermediate',
    description: 'In-depth knowledge about LVAD mechanisms and features.',
    link: '/intermediate',
  },
  {
    title: 'Advanced',
    description: 'Comprehensive understanding of LVAD complications and management.',
    link: '/advanced',
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