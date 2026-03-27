import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const devices = [
  { slug: 'heartmate-iii', name: 'HeartMate III', description: 'Advanced durable LVAD with reduced thrombosis risk.' },
  { slug: 'heartware-hvad', name: 'HeartWare HVAD', description: 'Durable centrifugal LVAD used for bridge and destination therapy.' },
  { slug: 'total-artificial-heart', name: 'Total Artificial Heart', description: 'Complete biventricular mechanical replacement for end-stage failure.' },
];

const DurableAdvanced = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Advanced - Durable MCS Devices
    </Typography>
    <Typography variant="body1" paragraph>
      In-depth durable device management, complications, and optimization.
    </Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {devices.map((device) => (
        <Card key={device.slug} style={{ width: 'calc(33% - 16px)', minWidth: '220px' }}>
          <CardContent>
            <Typography variant="h6">{device.name}</Typography>
            <Typography variant="body2" paragraph>{device.description}</Typography>
            <Link href={`/advanced/durable/${device.slug}`} passHref legacyBehavior>
              <Button variant="contained">Pump Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default DurableAdvanced;
