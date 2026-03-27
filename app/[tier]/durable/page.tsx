import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Button } from '@mui/material';

const durableDevices = [
  { slug: 'heartmate-iii', name: 'HeartMate III', description: 'Long-term continuous-flow LVAD.' },
  { slug: 'heartware-hvad', name: 'HeartWare HVAD', description: 'Implantable centrifugal durable LVAD.' },
  { slug: 'total-artificial-heart', name: 'Total Artificial Heart', description: 'Biventricular total heart replacement.' },
];

const DurableTypePage = ({ params }: { params: { tier: string } }) => {
  const { tier } = params;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {tier.toUpperCase()} - Durable MCS Devices
      </Typography>
      <Typography variant="body1" paragraph>
        Long-term mechanical circulatory support devices and management.
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {durableDevices.map((device) => (
          <Card key={device.slug} style={{ width: 'calc(33% - 16px)', minWidth: '220px' }}>
            <CardContent>
              <Typography variant="h6">{device.name}</Typography>
              <Typography variant="body2" paragraph>{device.description}</Typography>
              <Link href={`/${tier}/durable/${device.slug}`} passHref legacyBehavior>
                <Button variant="contained">Pump Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DurableTypePage;
