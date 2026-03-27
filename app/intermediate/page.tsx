import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const categories = [
  { title: 'Temporary MCS Devices', description: 'Intermediate-level acute support concepts.', link: '/intermediate/temporary' },
  { title: 'Durable MCS Devices', description: 'Intermediate-level chronic support concepts.', link: '/intermediate/durable' },
  { title: 'Tier 2 Nursing Brief', description: 'Bedside nursing and clinical staff education overview.', link: '/tier2' },
];

const IntermediatePage = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Intermediate Tier: Temporary vs Durable MCS
    </Typography>
    <Typography variant="body1" paragraph>
      Evaluate device selection and clinical pathway differences for bridge and destination therapy.
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

export default IntermediatePage;
