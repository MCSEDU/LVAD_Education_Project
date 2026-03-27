import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const categories = [
  { title: 'Temporary MCS Devices', description: 'Short-term support devices used in acute care.', link: '/beginner/temporary' },
  { title: 'Durable MCS Devices', description: 'Long-term support devices for chronic management.', link: '/beginner/durable' },
];

const BeginnerPage = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Beginner Tier: Temporary vs Durable MCS
    </Typography>
    <Typography variant="body1" paragraph>
      Learn basic differences between temporary and durable mechanical circulatory support devices.
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

export default BeginnerPage;
