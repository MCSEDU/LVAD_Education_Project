import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const categories = [
  { title: 'Temporary MCS Devices', description: 'Advanced case reviews for short-term mechanical support.', link: '/advanced/temporary' },
  { title: 'Durable MCS Devices', description: 'Advanced long-term therapy management and complications.', link: '/advanced/durable' },
];

const AdvancedPage = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Advanced Tier: Temporary vs Durable MCS
    </Typography>
    <Typography variant="body1" paragraph>
      Dive into complex device selection, advanced troubleshooting, and outcome optimization.
    </Typography>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px' }}>
      {categories.map((category) => (
        <Card key={category.title} style={{ width: '45%', minWidth: '250px' }}>
          <CardContent>
            <Typography variant="h6">{category.title}</Typography>
            <Typography variant="body2" paragraph>{category.description}</Typography>
            <Link href={category.link} passHref legacyBehavior>
              <Button variant="contained">Explore</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default AdvancedPage;
